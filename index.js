import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!  v1 updated");
});

const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});