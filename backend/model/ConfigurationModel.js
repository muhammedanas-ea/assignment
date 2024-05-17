import mongoose from "mongoose";

const configurationSchema = new mongoose.Schema({
  configId: { type: String, required: true, unique: true },
  data: { type: [[String]], default: [[]] },
  remark: { type: String },
});

export const Configuration = mongoose.model("Configuration", configurationSchema);
