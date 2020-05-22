var mongoose=require('mongoose');

 
 var mon= mongoose.connect('mongodb://localhost/webscrapper', function(err){
       
      if(err)
     console.log(err);
     else
     console.log("connected to db");


 });


module.exports=mongoose;
 