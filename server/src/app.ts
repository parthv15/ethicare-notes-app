import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import authRouter from "./routes/user";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/users", authRouter);

app.use((req, res, next) => {
  next(createHttpError(404, "Page not found :("));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  let errorMessage = "unkown error has occured";
  let statusCode = 500;

  if (isHttpError(error)) {
    errorMessage = error.message;
    statusCode = error.status;
  }

  res.status(statusCode).json({ error: errorMessage });
});

export default app;
