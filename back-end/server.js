import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import morgan from "morgan";
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
//routes

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello , welcome to website</h1>");
});

app.listen(8000, () => {
  console.log(`server is running on port 8000`);
});

// NOTE : Always be in cmd terminal only, powershell and node won't work properly.

// in package.json file

// must include  "type" : "module",
// "start" : "node server.js" --> to run it, "npm start"

// if you use nodemon then add, "server" : "nodemon server.js" , to run -> "npm run server" (preferable)

// to run both client and server ports , first install morgan, cors, concurrently package.
// then type npm run dev , better install this packages in server side and then run it.
