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

 

   //app.use(flash());

  app.use(customM.serverCrash);

  //app.use(setFlash.setFlash);

  app.use('/', require('./routers'));


  

    var server = app.listen(process.env.PORT || 5000, function () {
        var port = server.address().port;
        console.log("Express is working on port " + port);
      });