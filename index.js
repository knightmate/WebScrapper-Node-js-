const express=require('express');
//const cookieParser=require('cookie-parser');
const port=8000;
const app=express();
 const cheerio=require('cheerio');
 const fetch=require('node-fetch');

const request = require('request');

 



//static files
//app.use( express.static(path.join(__dirname, 'asset')))
//app.use(express.static('asset'));



//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',  async function(req,res){


    
   var url='https://github.com/trending';

    fetch(url)
    .then(response => {
        if(response.ok) {

           
             console.log(response);
             return response.text();
           


        }
    }).then(data => {
        if(data) {
           
             
            // console.log(data);

            const $ = cheerio.load( data);
            const box = $('title').text();

        
               
             const allTitles=$('.h3 lh-condensed');

            var b= box.parent;
          
            console.log(box);

            

             
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

 

 
  
 


 
 

app.listen(process.env.PORT || 2000, function(){
   
    console.log("server is running on ", port);


})
