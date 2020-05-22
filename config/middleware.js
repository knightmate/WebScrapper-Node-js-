module.exports.serverCrash=(req,res,next)=>
{
    
    process.on('exit', function(code) {


        console.log(`About to exit with code ${code}`);
         
        
       
          // return res.render('home');
 
         return res.send(`<h2>Server Crash</h2>`);
             
        
          
    
    });

 
    next();

}