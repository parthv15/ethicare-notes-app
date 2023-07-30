import "dotenv/config";
import app from "./app";
import mongoose from "mongoose";
import env from "./util/validateEnv";

const port = env.PORT;

mongoose
  .connect(env.DB_CONNECTION_STRING)
  .then(() => {
    console.log("connected to mongodb");
    app.listen(port, () => {
      console.log(`[server]: listening on port ${port}`);
    });
  })
  .catch(console.error);
