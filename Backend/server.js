import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';


//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("API Working");
});
// db connectionn
connectDB();
app.use("/api/food" , foodRouter);
app.use("/images" , express.static('uploads'));

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
