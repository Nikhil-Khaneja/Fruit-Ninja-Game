//script.js

var score;
var playing = false;
var fruits =['apple','banana','cherries', 'grapes', 'mango', 'orange', 'peach','pear', 'watermelon'];
var trialsLeft;
var action; //variable for setInterval
var step;

$(function(){
   $("#startreset").click(function(){
     if(playing == true){
         //I want to reset;
         location.reload();//thi function will reset the game
     }  
     else{
         //I want to play!
         playing=true;
         score=0;
         $("#scorevalue").text(score);
         trialsLeft=3;
         $("#trialsLeft").show();
         addHearts();
         $("#gameOver").hide();
         $("#startreset").text("Reset game");
         //start sending fruits;
         startAction();
     }   
   });
   function addHearts(){
       $("#trialsLeft").empty();
       for(i=0;i<trialsLeft;i++){
           $("#trialsLeft").append("<img src='images/heart.png' class='life'>");
       }
   }
   $("#fruit1").mouseover(function(){
       score++;
       $("#scorevalue").text(score);
//       Document.getElementById("slicesound").play();
       $("#slicesound")[0].play();
       stopAction();
       $("#fruit1").hide("explode", 500);
       //again start sending other fruits!
       setTimeout(startAction, 600); //yaha agar braces dalenge toh vo direct funtion call kar dega usko rukane ke lie humhe yaha function ke naam ke saath braces nhi daale hai
   });
   function startAction(){
       $("#fruit1").show();
       chooseFruits();
       $("#fruit1").css({
           'left': Math.round(Math.random() * 550 ),/*yaha isse inver comas ma nhi dalna hai nhi toh usko property ki tarah lega*/
           'top': -60
       });
       step = 1+Math.round(Math.random() * 5);
       action = setInterval(function(){
            $("#fruit1").css("top",$("#fruit1").position().top + step);
           if($("#fruit1").position().top > $("#fruitsContainer").height()){
//               check if we have trialsLeft or not 
               if(trialsLeft>1){
//                   generate a fruit again and reduce the life
                   $("#fruit1").css({
                       'left':Math.round(Math.random() *550),
                       'top' :-60
                   });
                   step = 1 + Math.round(Math.random()*5);
                   trialsLeft--;
                   addhearts();
               }
               else{
//                   game over
                   playing=false;
                   $("#startreset").text("Start Game");
                   $("#gameOver").show();
                   $("#gameOver").html("<p>Game Over!</p><p>your Score"+score+"</p>");
                   $("#trialsLeft").hide();
                   $("#scorevalue").text("");
                   stopAction();
               }
           }
       },10);
   }    
    
    function chooseFruits(){
        $("#fruit1").attr("src","images/"+fruits[Math.round(Math.random()*(fruits.length -1))]+".png");
    }
    function stopAction(){
        clearInterval(action);
    }
});
