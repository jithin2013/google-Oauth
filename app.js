const express= require('express');

const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("Server is up");
});

app.listen(3000,()=>{
    console.log("Server is listening");
})