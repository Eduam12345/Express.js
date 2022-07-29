const express=require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// app.get("/", function(request, response){
//   response.sendFile(__dirname + "/index.html");
// });
app.get("/", function(request, response){
  response.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/", function (request, response){

  var weight=parseFloat(request.body.weight);
  var height = parseFloat(request.body.height);

  var result = weight + height;
  response.send("Your BMI is " + " " + result);
});
app.listen(3000, function(){
  console.log("server started on port 3000");
});
