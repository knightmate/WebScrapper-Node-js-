const express=require('express');
const router=express.Router()
const controller=require('../controllers');

 
 


  
router.get('/',function(req,res){
  
    console.log('into /');
    
     
    res.render('home',{
       
        title:'',
        
        link:''

    }); 


})


router.get('/getdata',controller.getLink);



  module.exports=router;