export default async function handler(req, res) {
  const { path } = req.query;

  const endpoint = path.join("/"); 
  // example: auth/login

  const response = await fetch(
    `http://13.201.63.42:5001/api/${endpoint}`,
    {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
    }
  );

  const data = await response.json();

  res.status(response.status).json(data);
}