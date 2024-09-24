import mongoose, { Schema, model } from "mongoose";

interface User {
  id:mongoose.Schema.Types.ObjectId;
  nickname: string;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
  deletedAt: Date;
  password: string;
  isPremium: Boolean;
}

const userSchema = new Schema<User>({
  id: { type: mongoose.Schema.Types.ObjectId },
  nickname: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null },
  password: { type: String },
  isPremium: { type: Boolean,default:false },
});

const UserModel = model<User>("User", userSchema);

export default UserModel;
