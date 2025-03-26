import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/indexRoute.mjs";
import connectDB from "./config/dbConnection.mjs";
import AppError from "./utils/AppError.mjs";
dotenv.config();

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// const cookieParserSecret = process.env.SECRET_KEY;
// app.use(cookieParser(cookieParserSecret));

const whitelist = [process.env.FE_URL, process.env.DEPLOY_FE_URL];

const corsOptionsDelegate = (req, callback) => {
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    callback(null, {
      origin: req.header("Origin"), //// Automatically reflects the request's origin if in the whitelist
      credentials: true,
      methods: "GET,HEAD,PATCH,POST,PUT,DELETE",
      allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    }); // reflect (enable) the requested origin in the CORS response
  } else {
    callback(null, {origin: false}); // Deny CORS if not in whitelist
  }
};
app.use(cors(corsOptionsDelegate));

app.use(routes);

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

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  connectDB();
  console.log( `app running at http://localhost:${PORT}`)
})