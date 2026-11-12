import express from "express"
import taskRouter from "./routes/task.routes.js"
import taskMiddleware from "./middleware/task.middleware.js";
const app = express();


app.use(express.json());

app.use("/api/tasks", taskRouter);
app.use(taskMiddleware.errorHandler);
export default app;