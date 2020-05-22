const express=require('express');
//const cookieParser=require('cookie-parser');
const cheerio=require('cheerio');
 const fetch=require('node-fetch');

const request = require('request');
const router=express.Router()
const controller=require('../controllers');

 
 


  
router.get('/',function(req,res){
  
    
    res.render('home',{
       
        title:'',

        link:''

    }); 


})


router.get('/getdata',controller.getLink);



  module.exports=router;