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

app.use(function(req,res,next){

  console.log('into middleware');
    
    

  process.on('exit', function(code) {


     console.log(`About to exit with code ${code}`);

       console.log(res.send);
 
       return res.send("server crash");
          
        
    
      

});

next();
          

});


  //app.use(setFlash.setFlash);

  app.use('/', require('./routers'));


  

    var server=app.listen(process.env.PORT || 5000, function(){

      console.log('server runnig on ', server.address().port);

    })

     