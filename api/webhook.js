export default async function handler(req, res) {
    // Handle GET request for webhook verification
    if (req.method === 'GET') {
      return res.status(200).send('Webhook is live'); // Respond to verification request
    }
  
    // Handle POST request with actual data
    if (req.method === 'POST') {
      const data = req.body;
      console.log('Webhook received:', data);
      
      // Handle the webhook data (e.g., process it, store it, etc.)
      res.status(200).json({ message: 'Webhook received' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  
  
  