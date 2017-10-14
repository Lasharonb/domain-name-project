 var pronoun = ["the","our","his"];
  var adj = ["great", "big", "amazing" ];
   var noun = ["jogger","racoon","dog", "merchant", "driver"];
  
    //creating a sentence (the excuse)
    
    for(var p = 0; p<pronoun.length;p++){
     
     for(var a = 0; a<adj.length;a++){
      
      for(var n = 0; n<noun.length;n++){
       
       document.getElementById("domains").innerHTML += '<li>'+pronoun[p] + adj[a] + noun[n]+'.com</li>'; 
      
       
      }
     
      
     }
    
     
    }