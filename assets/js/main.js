//Take input and create Todo
$("input[type = 'text'").keypress(function(e){
    //Check for 'Enter' being pressed
    if(e.which === 13){
       var newTodo = $(this).val();
       $(this).val("");
       $('ul').append("<li>" + newTodo + "<span id='trash' class=\"fa fa-trash\"></span><span id=\"check\" class=\"fa fa-check-circle-o\"></span></li>");
       $('#box').css("padding", "10px");
   } 
});

//Check off todos
$("ul").on("click", "#check", function(){
    $(this).parent().toggleClass("line");
});

//Remove todos
$("ul").on("click", "#trash", function(e){
    //Prevent bubbling up
    e.stopPropagation;
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
})

//Make todos sortable
$("ul").sortable();