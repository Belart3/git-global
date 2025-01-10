export default async function handler(req, res) {
    if (req.method === 'POST') {
      const data = req.body;
      console.log('Webhook received:', data);
      
      // Handle the webhook data here
  
      res.status(200).json({ message: 'Webhook received' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  