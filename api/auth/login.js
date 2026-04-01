export default async function handler(req, res) {
  const response = await fetch("http://13.201.63.42:5001/api/auth/login", {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();
  res.status(response.status).json(data);
}