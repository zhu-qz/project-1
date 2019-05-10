$("#subnav").on('mouseover','li',function(){
      // if($(this).index > 1 && $(this).index < 6){
      if($(this).index()> 1 && $(this).index() < 6){
            $("#subnav").children(".list").css("display","block");
            
      }
    
});
$("#subnav").on('mouseout','li',function(){
      // if($(this).index > 1 && $(this).index < 6){
      if($(this).index()> 1 && $(this).index() < 6){
            $("#subnav").children(".list").css("display","none");
      }
    
});
$("#subnav").on('mouseout','.list',function(){
    $(this).css("display","none"); 
});
$("#subnav").on('mouseover','.list',function(){
    $(this).css("display","block"); 
});


$(".banner1").banner({
      items:$(".banner1").children(".imgbox").children("a"),     
      left:$(".banner1").find("#left"),
      right:$(".banner1").find("#right"),
      delayTime:3000,
      moveTime:300
})

