import express, { Request, Response } from "express";
import { ResponseData } from "../../types";
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get("/", (req: Request, res: Response) => {
    const data: ResponseData = {
        message: "Hello Man!",
        name: "John Doe",
        age: 30
    }
    res.json(data);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});