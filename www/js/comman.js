$(document).ready(function(e){
    //alert("Hari Om");
    
    
    $("#p1").click(function(e){
        e.preventDefault();
        $("#home_page").addClass("w3-hide");
        $("#page1").removeClass("w3-hide");
        $("#page2").addClass("w3-hide");
        $("#page3").addClass("w3-hide");
        $("#page4").addClass("w3-hide");
        $("#page5").addClass("w3-hide");
        $("#page6").addClass("w3-hide");
        $("#page7").addClass("w3-hide");
        $("#page8").addClass("w3-hide");
        $("#page9").addClass("w3-hide");
        $("#mySidebar").css("display","none");
        
    });
    $("#hp").click(function(e){
        e.preventDefault();
        $("#page1").addClass("w3-hide");
        $("#home_page").removeClass("w3-hide");
        $("#page2").addClass("w3-hide");
        $("#page3").addClass("w3-hide");
        $("#page4").addClass("w3-hide");
        $("#page5").addClass("w3-hide");
        $("#page6").addClass("w3-hide");
        $("#page7").addClass("w3-hide");
        $("#page8").addClass("w3-hide");
        $("#page9").addClass("w3-hide");
        $("#mySidebar").css("display","none");
        
        
    });
   
   
     $("#p3").click(function(e){
        e.preventDefault();
        $("#home_page").addClass("w3-hide");
        $("#page1").addClass("w3-hide");
        $("#page2").addClass("w3-hide");
        $("#page3").removeClass("w3-hide");
        $("#page4").addClass("w3-hide");
        $("#page5").addClass("w3-hide");
        $("#page6").addClass("w3-hide");
        $("#page7").addClass("w3-hide");
        $("#page8").addClass("w3-hide");
        $("#page9").addClass("w3-hide"); 
        $("#mySidebar").css("display","none");
         
    });
     $("#p4").click(function(e){
        e.preventDefault();
        $("#home_page").addClass("w3-hide");
        $("#page1").addClass("w3-hide");
        $("#page2").addClass("w3-hide");
        $("#page3").addClass("w3-hide");
        $("#page4").removeClass("w3-hide");
        $("#page5").addClass("w3-hide");
        $("#page6").addClass("w3-hide");
        $("#page7").addClass("w3-hide");
        $("#page8").addClass("w3-hide");
        $("#page9").addClass("w3-hide"); 
        $("#mySidebar").css("display","none");
        
    });
     $("#p5").click(function(e){
        e.preventDefault();
        $("#home_page").addClass("w3-hide");
        $("#page1").addClass("w3-hide");
        $("#page2").addClass("w3-hide");
        $("#page3").addClass("w3-hide");
        $("#page4").addClass("w3-hide");
        $("#page5").removeClass("w3-hide");
        $("#page6").addClass("w3-hide");
        $("#page7").addClass("w3-hide");
        $("#page8").addClass("w3-hide");
        $("#page9").addClass("w3-hide");
        $("#mySidebar").css("display","none");
         
         
    });
    $("#p6").click(function(e){
        e.preventDefault();
        $("#home_page").addClass("w3-hide");
        $("#page1").addClass("w3-hide");
        $("#page2").addClass("w3-hide");
        $("#page3").addClass("w3-hide");
        $("#page4").addClass("w3-hide");
        $("#page5").addClass("w3-hide");
        $("#page6").removeClass("w3-hide");
        $("#page7").addClass("w3-hide");
        $("#page8").addClass("w3-hide");
        $("#page9").addClass("w3-hide");
        $("#mySidebar").css("display","none");
         
         
    });
     $("#p7").click(function(e){
        e.preventDefault();
        $("#home_page").addClass("w3-hide");
        $("#page1").addClass("w3-hide");
        $("#page2").addClass("w3-hide");
        $("#page3").addClass("w3-hide");
        $("#page4").addClass("w3-hide");
        $("#page5").addClass("w3-hide");
        $("#page6").addClass("w3-hide");
        $("#page7").removeClass("w3-hide");
        $("#page8").addClass("w3-hide");
        $("#page9").addClass("w3-hide"); 
        $("#mySidebar").css("display","none");
         
         
    });
     $("#p8").click(function(e){
        e.preventDefault();
        $("#home_page").addClass("w3-hide");
        $("#page1").addClass("w3-hide");
        $("#page2").addClass("w3-hide");
        $("#page3").addClass("w3-hide");
        $("#page4").addClass("w3-hide");
        $("#page5").addClass("w3-hide");
        $("#page6").addClass("w3-hide");
        $("#page7").addClass("w3-hide");
        $("#page8").removeClass("w3-hide");
        $("#page9").addClass("w3-hide");
        $("#mySidebar").css("display","none");
         
         
    });
     $("#p9").click(function(e){
        e.preventDefault();
        $("#home_page").addClass("w3-hide");
        $("#page1").addClass("w3-hide");
        $("#page2").addClass("w3-hide");
        $("#page3").addClass("w3-hide");
        $("#page4").addClass("w3-hide");
        $("#page5").addClass("w3-hide");
        $("#page6").addClass("w3-hide");
        $("#page7").addClass("w3-hide");
        $("#page8").addClass("w3-hide");
        $("#page9").removeClass("w3-hide");
        $("#mySidebar").css("display","none");
         
         
    });
    
    
  /*-------------------------Sidebar Animation-----------------------------*/  
           
    $(".sidebar_toggle").click(function(){
        //alert("Hari Om");
            $("#mySidebar").animate({
                width: "toggle"
            },function(e){});
        });
    
 
});