module.exports.serverCrash= function(req,res,next)
{
    
    
    process.on('exit', function(code){
       
        console.log("error code ", code);

       return res.send();
        

    })
    
    next(); 
    

}

 