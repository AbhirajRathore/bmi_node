const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function (req,res) {
    res.sendFile(__dirname+"/index.html");
    });
app.post("/",function (req,res) {
    var height= Number(req.body.height);
    var weight= Number(req.body.weight);
    var bmi= weight/(height*height);
    console.log(bmi);
    res.send("hello your bmi is "+bmi);
});

app.listen(3000,function () {
    console.log("its running on port 3000");
});