import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

import portfolioRoutes from "./routes/portfolioRoutes.js";
import messageRoutes from "./routes/messageRoutes.js"
import serviceRequestRoutes from "./routes/serviceRequestRoutes.js";
import authRoutes from "./routes/authRoutes.js";



const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/portfolio", portfolioRoutes);
app.use("/api/messages", messageRoutes)
app.use("/api/service-requests",serviceRequestRoutes);
app.use("/api/auth",authRoutes);
app.listen(5000, () => {

console.log("Server running on port 5000");

});
