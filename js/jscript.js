$(function(){
//   Draggables
    $(".container1").draggable();
    $(".imgs").draggable();
    
//    DROPPABLE
    $(".container2").droppable({
        accept: ".imgs",
         drop: function() {
             window.alert("hello");
         }
        
        });
});