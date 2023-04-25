import express from "express";
import taskRouter from "./src/routes/task.route";
import { createServer } from 'http'
import bodyParser from "body-parser";
import { connectDB } from "./src/utils/db.util";
import cors from 'cors'

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());
app.use("/api/v1/task", taskRouter);

connectDB()

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});