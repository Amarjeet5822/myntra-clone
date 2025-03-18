import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import routes from "./routes/indexRoute.mjs";
import connectDB from "./config/dbConnection.mjs";
dotenv.config();

const app = express();

app.use(morgan('tiny'));
app.use(express.json());


app.use(routes);

app.get("/", (req, res) => {
  res.send("You are at home Page")
})

const PORT = process.env.PORT || 8082
app.listen(PORT, () => {
  connectDB();
  console.log( `app running at http://localhost:${PORT}`)
})