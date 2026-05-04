import React, { useEffect, useState } from "react";
import API from "../api";

const BuyerMessages = () => {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [costCenter, setCostCenter] = useState("");

  const loadUsers = async () => {
    const res = await API.get("/messages/inbox/users");
    if (res.data.success) {
      setUsers(res.data.users || []);
    }
  };

  const loadConversation = async (user) => {
    setActiveUser(user);

    const res = await API.get(`/messages/conversation/${user.user_id}`);
    if (res.data.success) {
      setMessages(res.data.messages || []);
    }

    await API.put(`/messages/read/${user.user_id}`);
  };

  const sendMessage = async () => {
    if (!activeUser || !message.trim()) return;

    const res = await API.post("/messages/send", {
      receiver_id: activeUser.user_id,
      message,
      cost_center: costCenter || null,
    });

    if (res.data.success) {
      setMessage("");
      loadConversation(activeUser);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F2EA] p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border overflow-hidden grid grid-cols-1 md:grid-cols-3">
        <div className="border-r p-4">
          <h2 className="font-bold text-lg mb-4">Messages</h2>

          {users.length === 0 ? (
            <p className="text-sm text-gray-500">No conversations found</p>
          ) : (
            users.map((user) => (
              <button
                key={user.user_id}
                onClick={() => loadConversation(user)}
                className={`w-full text-left p-3 rounded mb-2 ${
                  activeUser?.user_id === user.user_id
                    ? "bg-[#43624A] text-white"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <p className="font-semibold text-sm">
                  {user.companyName || `${user.firstName || ""} ${user.lastName || ""}`}
                </p>
                <p className="text-xs opacity-80">{user.email}</p>
              </button>
            ))
          )}
        </div>

        <div className="md:col-span-2 flex flex-col min-h-[600px]">
          <div className="p-4 border-b">
            <h2 className="font-bold">
              {activeUser
                ? activeUser.companyName || activeUser.email
                : "Select a conversation"}
            </h2>
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[70%] p-3 rounded-lg text-sm ${
                  msg.sender_id === activeUser?.user_id
                    ? "bg-white border"
                    : "bg-[#43624A] text-white ml-auto"
                }`}
              >
                <p>{msg.message}</p>
                <p className="text-[10px] opacity-70 mt-1">
                  {new Date(msg.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          {activeUser && (
            <div className="p-4 border-t space-y-3">
              <input
                value={costCenter}
                onChange={(e) => setCostCenter(e.target.value)}
                placeholder="Cost center optional"
                className="w-full border rounded px-3 py-2 text-sm"
              />

              <div className="flex gap-2">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type message..."
                  className="flex-1 border rounded px-3 py-2"
                />

                <button
                  onClick={sendMessage}
                  className="bg-[#43624A] text-white px-6 rounded hover:bg-[#2A2A2A]"
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyerMessages;