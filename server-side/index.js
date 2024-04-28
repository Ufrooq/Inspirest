import express from 'express';
import { connect } from './dBconnection.js';
import userRoutes from "./Routes/userRoutes.js"
const app = express();
const port = 8000;



app.use("/user", userRoutes)

connect();
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})