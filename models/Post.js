import { Schema, model } from "mongoose";

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  keywords: { type: String},
  createdAt: { type: Date, default: Date.now },
});

export default model("Post", postSchema);
