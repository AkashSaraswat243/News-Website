export default async function handler(req, res) {
    const query = req.query.q || "India";
  
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=43a90128135e42809afe2f7aa9c75f06`
    );
  
    const data = await response.json();
    res.status(200).json(data);
  }
  