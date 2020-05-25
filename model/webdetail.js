let mongoose = require('mongoose');
//let optionsModel = require('./options.model');
let webdetail = mongoose.Schema;


let web = new webdetail({
    
     link:{
         type:String,
         required:true
     },

     title:{
        type:String,
        

    },

     
    
},
 {timestamps: true});


 
let Web = mongoose.model("webdetail", web);

module.exports = Web;