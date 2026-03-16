import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import portfolioRoutes from "./routes/portfolioRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import serviceRequestRoutes from "./routes/serviceRequestRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

/* MIDDLEWARE */

app.use(cors());
app.use(express.json());

/* DATABASE */

connectDB();

/* ROOT ROUTE (Fix for Cannot GET /) */

app.get("/", (req, res) => {
  res.send("WebGenX API is running 🚀");
});

/* ROUTES */

app.use("/api/portfolio", portfolioRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/service-requests", serviceRequestRoutes);
app.use("/api/auth", authRoutes);

/* PORT */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});