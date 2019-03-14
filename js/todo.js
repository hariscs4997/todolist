$("ul").on("click","li",function(){
    $(this).toggleClass("lol");    
});

   
$("ul").on("click","span",function(event){
   $(this).parent().fadeOut(500,function(){
          $(this).remove();
   }) ;
   event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if(event.which==13){
        var temp=$(this).val();
        $(this).val("");
      $("ul").append("<li><span>X</span> "+ temp +"</li>");    
    }
   
})
$("span").hover(function(){
  $(this).toggleClass("far fa-trash-alt");
  
});

$("#done").click(function(){
 $("input[type='text'").fadeToggle();
});