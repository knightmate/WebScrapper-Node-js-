const database=require('../model/webdetail');
const cheerio=require('cheerio');
 const fetch=require('node-fetch');
 

var controller={};

controller.getLink=async function(req,res){


  
   
    console.log(' controller');
      
     
      req.querys.object=20;

      
    var url=req.query.text;

    try{
          
        let getlink= await database.find({

        link:url,

    });


    
    console.log(getlink);

    //if it is true means link is present in database
     if(getlink.length>0)
     {
        console.log('link');


     }else{

        console.log('into else');

         let data= await getdata(url);
           
      


         console.log('data',data);

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


     
      
}
catch(err)
{
    console.log(err);
}
  
}
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


   

  module.exports=controller;