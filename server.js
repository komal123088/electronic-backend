import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import saleRoutes from "./routes/saleRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import customerRoutes from "./routes/customerRoutes.js";

dotenv.config();

const app = express();

// CORS setup
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.options("/*all", cors());

app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/sales", saleRoutes);
app.use("/api/customers", customerRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Shop Management API is running" });
});

app.use(errorHandler);

export default app;
