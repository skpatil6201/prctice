import express from 'express'
const app = express();
import axios from 'axios'
import redis from 'redis'
const client = redis.createClient();

app.use(express.json())


client.on('error', (err) => {
    console.log("error", err)
})

await client.connect();
app.get("/getData", async (req, res) => {
  try {
    const key = genarateKey(req);

    const cachedData = await client.get(key);
    if (cachedData) {
      console.log("✅ Cache HIT");
      return res.json(JSON.parse(cachedData));
    }

    console.log("❌ Cache MISS");
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    await client.setEx(key, 600, JSON.stringify(response.data));
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


function genarateKey(req) {
    const baseul = req.path.replace(/^\/+|\/+$/g, '').replace(/\//g, ':');
    const params = req.query;
    const sortedParams = Object.keys(params)
        .sort().map((key) => `${key}=${params[key]}`)
        .join('&')

    return sortedParams ? `${baseul}:${sortedParams}` : baseul
}


app.listen(9999, () => {
    console.log("app run on 9999")
})