const express=require("express");
const app=express();

// console.dir(app);

let port=3001;

app.listen(port,()=>{
    console.log(`Your server started successfully on ${port}`)
});

app.use((req,res)=>{
    console.log(req);
    // console.log("request received");
    res.send('<p>This is a basic response</p>')
});