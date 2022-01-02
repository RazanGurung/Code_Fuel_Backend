const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser'); 
const env = require("dotenv");
const connectDB = require("./Database/Database");
const Search = require("./model");

env.config({
  path:"./.env"
})

connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/search',function(req,res){
  const searchValue = req.query.search;
  if(searchValue !== ""){
    Search.find({"Search Terms":{$regex:"^"+searchValue, $options:'i'}}).then(data=>{
      const sortedData=data.sort(function(a,b){
        return a["Num Searches"]-b["Num Searches"]});
      const reverseData = sortedData.reverse();
      if(reverseData.length > 10){
        res.status(200).json(reverseData.slice(0,10));
      }else{
        res.status(200).json(reverseData);
      }
    }).catch(err=>{
      console.log(err)
    })
  }
}); 

app.listen(8000);
