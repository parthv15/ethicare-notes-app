import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";

const env = cleanEnv(process.env, {
  DB_CONNECTION_STRING: str(),
  PORT: port(),
});

export default env;
