const cheerio=require('cheerio');
 const fetch=require('node-fetch');
var controller={};

controller.getLink=async function(req,res, next){   
    var url=req.query.text;
    
    try{
    
      console.log(url);

    //if it is true means link is valid
    console.log(validURL(url));
     if(! validURL(url) )
     { 
        
        console.log('INVALID URL');
        
        res.locals.error=true;
        return res.render('home',{
            title:'',
            link:'',

        })


     }else{

        console.log('into else');

         let data= await getdata(url);
        
         console.log('data',data);

         if(data){

         const $ = await cheerio.load( data );
             
         const title = $('title').text();
             const link = $('a');
            // const $a = $('a').html();   
                  
            // console.log($a)


             
             
            return res.render('home',{
                 title:title,
                 link:link,

             })
             

     }
     else{
        
        res.locals.error=true;
        return res.render('home',{
            title:'',
            link:'',

        })
        
     }
    } 


     
      
}
catch(err)
{
     console.log(err);
      res.locals.flash('error', 'Somthing went wrong , try gain');
        return res.redirect('back');

}
  
}
  
  function getdata(url)
  {
     
   
    
       console.log(url);
    let data= fetch(url)
     .then(response => {
         if(response.ok) {
 
            
              //console.log(response);
              return response.text();
                
 
 
         }
     }).then(data => {

         if(data) {
               
            return data;
    
         }
     }).catch(err => console.error(err));


     console.log(data);
     return data;

  }


  function validURL(str) {
    if(str.length>3 && str.includes(".com"))
    return true;
    return false;
  }
   

  module.exports=controller;