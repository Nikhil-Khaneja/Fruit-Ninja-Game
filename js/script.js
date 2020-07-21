//script.js
$(function(){
    //Draggables
    
    $(".box").draggable();
    $("#box1").draggable({scroll: true, revert: true});
    $("#box2").draggable({axis: "x"});
    $("#box3").draggable({axis: "y"});
    $("#box4").draggable({containment: ".container"});
    
    //DROPPABLE
    $("#droppable").droppable({
        accept: "#box1",
        drop: function(){
            $(this).text("when a box get attitude drop like this!")
        }
    });
    
    //sortable
    $("#sortable").sortable({
        connectWith: "#sortableToo",
        placeholder: "placeholder-box"
    });
    
    $("#sortableToo").sortable({
        connectWith: "#sortable",
        placeholder: "placeholder-box"

    });
    
    
    // TODO LIST

    $("#todoList ul").sortable({
        connectWith: "ul",
        items: "li:not('.listTitle, .addItem')",
        placeholder: "emptySpace",
    });

    $('input').keydown(function(e){
        if(e.keyCode==13){
            //you pressed enter
            var item = $(this).val();
            $(this).parent().parent().append("<li>"+item+"</li>");
            $(this).val("");
        }
    });

    $("#trash").droppable({
        drop: function(event,ui){
            ui.draggable.remove();
        }
    });
    
    //ACCORDION
    
    $("#accordion").accordian({
        collapsible: true,
        heightStyle: "content"
    });
    
    
     //datepickers
    $(".date").datepicker({
        showOtherMonths: true, //displays list of other months
        selectOtherMonths: true, //lets to select or jump to other month
        selectButtonPanel:true, //used specially to come bck to todays date
        changeMonth: true, //can change moonth
        changeYear: true, //can change year
        numberOfMonths: 2, //would giv only 2 months in the list
        minDate: "-1M+2D", //-1, -1W, -1M
        maxDate: "+1W", // after the given max date the other dates would be disabled
    });
    

});


