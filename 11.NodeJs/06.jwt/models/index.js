import { Schema, model } from "mongoose";

const todoSchema = new Schema(
    {
        todoContent: { type: String, required: true },
        ip: { type: String }
        // owner/todoAddBy: { type: Schema.ObjectId, ref: "User" },
    },
    { timestamps: true },
);
export const Todo = model("Todo", todoSchema);

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    { timestamps: true },
);

export const User = model("User", userSchema);