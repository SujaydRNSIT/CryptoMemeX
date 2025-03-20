require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { generateMeme } = require("./memeGenerator");
const { getBalance, transferTokens } = require("./aptosAgent");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/generate-meme", async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    try {
        const memePath = await generateMeme(prompt);
        res.json({ success: true, image: memePath });
    } catch (error) {
        res.status(500).json({ error: "Failed to generate meme" });
    }
});

app.get("/balance", async (req, res) => {
    const { address } = req.query;
    if (!address) return res.status(400).json({ error: "Address is required" });

    try {
        const balance = await getBalance(address);
        res.json({ success: true, balance });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch balance" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
