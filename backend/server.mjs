import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import routes from "./routes/indexRoute.mjs";
import connectDB from "./config/dbConnection.mjs";
import AppError from "./utils/AppError.mjs";
dotenv.config();

const app = express();

app.use(morgan('tiny'));
app.use(express.json());


app.use(routes);

app.get("/", (req, res) => {
  res.send("You are at home Page")
})

app.all("*", (req, res) => {
  next(new AppError(404, `Can't find ${req.originalUrl} on this server!`));
})

// ✅ Global Error Handling Middleware
app.use((err, req, res, next) => {
  err.logError(); // Log error details
  res.status(err.statusCode || 500).json({
    status: err.status,
    message: err.message,
    data: err.data,
  });
});

const PORT = process.env.PORT || 8082
app.listen(PORT, () => {
  connectDB();
  console.log( `app running at http://localhost:${PORT}`)
})