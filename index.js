const express=require('express');
//const cookieParser=require('cookie-parser');

const app=express();
 
 
const bodyparser=require('body-parser');
//const mongoose=require('./config/mongoose');
 const customM=require('./config/middleware');
 
app.use(bodyparser.urlencoded());


//static files
//app.use( express.static(path.join(__dirname, 'asset')))
//app.use(express.static('asset'));



//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

  app.use(customM.serverCrash);

   //app.use(flash());

 


  //app.use(setFlash.setFlash);


  app.use('/', require('./routers'));


  

    app.listen(process.env.PORT || 500, function(){

      console.log('server runnig on ', 500);

    }) 
 
     
    