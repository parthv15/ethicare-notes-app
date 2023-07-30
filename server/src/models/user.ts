import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true, select: false },
  password: { type: String, required: true, unique: false, select: false },
});

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);
