import express from "express";
import todoRouters from "./routes/todo.routes.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/v1/todos', todoRouters);  

export default app;