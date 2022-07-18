import express from "express";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/ping", (_req, res) => {
    console.log("Hola");
    res.send("pong")
})

app.listen(port, () => console.log(`Se esta ejecutando en le purto: ${port}`));