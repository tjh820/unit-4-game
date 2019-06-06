$( document ).ready(function(){
    var Random=Math.floor(Math.random()*50+19)
   
    $("#randomNumber").text(Random);
    
    var crs1= Math.floor(Math.random()*12+1)
    var crs2= Math.floor(Math.random()*11+1)
    var crs3= Math.floor(Math.random()*12+1)
    var crs4= Math.floor(Math.random()*11+1)
    
    var uzerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  $("#numberWins").text(wins);
  $("#numberLosses").text(losses);
  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $("#randomNumber").text(Random);
        crs1= Math.floor(Math.random()*11+1);
        crs2= Math.floor(Math.random()*11+1);
        crs3= Math.floor(Math.random()*11+1);
        crs4= Math.floor(Math.random()*11+1);
        uzerTotal= 0;
        $("#finalTotal").text(uzerTotal);
        } 
//win
  function winna(){
  alert("You won!");
    wins++; 
    $("#numberWins").text(wins);
    reset();
  }
  //lose
  function lozer(){
  alert ("You lose!");
    losses++;
    $("#numberLosses").text(losses);
    reset()
  }
  
    $("#crystalwon").on ("click", function(){
      uzerTotal = uzerTotal + crs1;
      $('#finalTotal').text(uzerTotal); 
            //sets win/lose conditions
          if (uzerTotal == Random){
            winna();
          }
          else if ( uzerTotal > Random){
            lozer();
          }   
    })  
    $("#crystaltoo").on ("click", function(){
      uzerTotal = uzerTotal + crs2;
      $('#finalTotal').text(uzerTotal); 
          if (uzerTotal == Random){
            winna();
          }
          else if ( uzerTotal > Random){
            lozer();
          } 
    })  
    $("#crystaltree").on ('click', function(){
      uzerTotal = uzerTotal + crs3;
      $("#finalTotal").text(uzerTotal);
 
            if (uzerTotal == Random){
            winna();
          }
          else if ( uzerTotal > Random){
            lozer();
          } 
    })  
    $("#crystalfo").on ("click", function(){
      uzerTotal = uzerTotal + crs4;
      $("#finalTotal").text(uzerTotal); 
        
            if (uzerTotal == Random){
            winna();
          }
          else if ( uzerTotal > Random){
            lozer();
          }
    });   
  }); 