import { Schema, model } from "mongoose";

const todoSchema = new Schema(
  {
    todoContent: { type: String, required: true },
    ip: { type: String },
    kyaYeTaskHogyaHy: { type: Boolean, default: false },
    // owner/todoAddBy: { type: Schema.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Todo = model("Todo", todoSchema);
