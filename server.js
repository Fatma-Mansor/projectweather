// Setup empty JS object to act as endpoint for all routes
projectData ={};
const port=5000;
// Require Express to run server and routes
const express=require("express");
// Start up an instance of app
const app=express();
/* Middleware*/
const bodyParser=require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

const cors=require("cors"); 
app.use(cors());
// Initialize the main project folder
app.use(express.static('website')); 
// Setup Server
const server=app.listen(port,listening);
function listening(){
    console.log(`the local host ${port}`);
}

app.get('/all', function (req, res) { //send data from server to client when get request from app
    res.send(projectData);
  });

// post data from app to server
app.post('/get',function addData(req,res){  //send request to server from app
data={temperature:req.body.temp, //put body of request in new data 
aboutfelling: req.body.felling,
date:req.body.date,
}
console.log(data);
  //add data to projectData to send it to client
projectData=data;
});