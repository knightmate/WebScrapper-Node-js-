module.exports.serverCrash=function(req,res,next)
{
        
  

    
    process.on('exit', (code) => {
       
        console.log('Process beforeExit event with code: ', code);

           return res.send('server crash');
           
           


          
         

      });
 
    process.on('unhandledRejection', function(error){
   
   
        console.log('Unhadled promise rejection ',error);
        process.exit();
         
       
            
       
        
 
  
    }) 
    process.on('uncaughtException', function(error){
 
      
         
  
        console.log('error occured');
        process.exit();
        
 
 
    }); 
      
         
    
 


    process.on('SIGINT',function(code){


        console.log(code);
        server.close(() => {
            console.log('Process terminated')
          })

    });
        
 
       next();  
       
  
}

  
 
 