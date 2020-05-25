const express=require('express');
const app=express();
const bodyparser=require('body-parser'); 
 

 



//body parser
app.use(bodyparser.urlencoded());

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

  
 


  app.use('/', require('./routers'));


  

    app.listen(process.env.PORT ||1200, function(){

      console.log('server runnig on ', 1200);


    }) 
 
     
    