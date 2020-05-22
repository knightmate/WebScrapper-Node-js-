const express=require('express');
//const cookieParser=require('cookie-parser');

const app=express();
 const cheerio=require('cheerio');
 const fetch=require('node-fetch');

const request = require('request');
const bodyparser=require('body-parser');
//const mongoose=require('./config/mongoose');
 const customM=require('./config/middleware');
 const flash=require('connect-flash');
const setFlash=require('./config/setFlash');
app.use(bodyparser.urlencoded());


//static files
//app.use( express.static(path.join(__dirname, 'asset')))
//app.use(express.static('asset'));



//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

 

   //app.use(flash());

  app.use(customM.serverCrash);

  //app.use(setFlash.setFlash);

  app.use('/', require('./routers'));


  

app.listen(process.env.PORT || 80, function(){
   

    console.log("server is running on ", 2000);

 
    
})
