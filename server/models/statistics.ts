import mongoose from "mongoose";
import { IStats } from "../config/interface";

const contentSchema = new mongoose.Schema(
    {
        user_ID: String,
        session_ID: String,
        pages: [{ String }]
    }
);

export default mongoose.model<IStats>("Page", contentSchema);
