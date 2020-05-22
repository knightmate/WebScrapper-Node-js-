const express=require('express');
//const cookieParser=require('cookie-parser');
const cheerio=require('cheerio');
 const fetch=require('node-fetch');

const request = require('request');
const app=express();



  
app.get('/',function(req,res){

    res.render('home',{
       
        title:'',

        link:''

    });


})

app.get('/getdata',  async function(req,res){


    console.log(req.query);
      
     var url=req.query.text;
  
      
       
  
      fetch(url)
      .then(response => {
          if(response.ok) {
  
             
               console.log(response);
               return response.text();
                 
  
  
          }
      }).then(data => {
          if(data) {
             
               
              // console.log(data);
  
              const $ = cheerio.load( data );
              const box = $('title').text();
              const link = $('a');
              const $a = $('a').html();   
                   
              console.log($a)
              
  
          
                 
               
  
              var b= box.parent;
            
                  link.map( (obj,data)=>{
  
                      console.log(obj, data.attribs.href);
  
                  })
             
                return res.render('home', {
                 
                  title:box,
                  link:link
  
                });
              
  
               
          }
      }).catch(err => console.error(err));
  
      
   
  
      /*fetch('http://localhost:200/questions/1',{
  
   
         
      })
      .then(response =>{
  
          
          console.log(response);
  
      })
      .then(data=> {
          
          console.log(data);
  
      });*/
  
  
      /*const data = await fetch('https://github.com/trending');
  
      const $ = cheerio.load(await data.text());
      const allTitles = $('.repo-list li');
  
      console.log(data);*/
       
          
      
  
  });


  module.exports=app;