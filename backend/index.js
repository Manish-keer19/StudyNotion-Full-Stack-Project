import { connectDb } from "./src/config/database.js";
import app from "./app.js";

const Port = process.env.PORT;



connectDb()

app.get('/',(req,res)=>{
    res.send("<h1>Your are in home page</h1> ")
})

app.listen(Port,()=>{
    console.log("server is running on port",Port);
})

