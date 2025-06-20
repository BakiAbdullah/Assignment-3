import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
app.use(express.json());
app.use(cors());

// app.use("/notes", notesRoutes);
// app.use("/users", usersRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Library Management App!");
});

export default app;
