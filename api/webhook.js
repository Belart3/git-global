export default async function handler(req, res) {
    const data = req.body;
    console.log(`Received a ${req.method} request:`, data);
  
    res.status(200).json({ message: `Yes Received a ${req.method} request` });
  }
  
  