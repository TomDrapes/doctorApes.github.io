$(document).ready(function (){
    var currentImage = 0;

    /*
      This sets the current app to be displayed in the portfolio section
      when the left or right arrow is clicked. It sets the required apps main div to display:block
      while setting all others to display:none
    */

    $(".l-arrow, .left-arrow").on("click", function(){
        console.log("clicked");
        if(currentImage === 0){
            currentImage = 3;            
        }else{
            currentImage -= 1;
        }
        changeImage(currentImage);
    });
    $(".r-arrow, .right-arrow").on("click", function(){
        if(currentImage === 3){
            currentImage = 0;            
        }else{
            currentImage += 1;
        }
        changeImage(currentImage);
    });

    //Display only the current app and hide all others
    function changeImage(current){
        switch(current){
            case 0: turnOffAll();
            $("#calculator").css("display", "block"); 
            $("#folio").css("background-color", "rgb(20, 206, 209)");
            
            break;
            case 1: turnOffAll();
            $("#pomodoro").css("display", "block");
            $("#folio").css("background-color", "rgb(180, 57, 57)"); 
            break;
            case 2:turnOffAll();
            $("#simon").css("display", "block");
            $("#folio").css("background-color", "rgb(255, 199, 121)");
            break;
            case 3:turnOffAll();
            $("#tictactoe").css("display", "block");
            $("#t-overlay").css("display", "block");            
            $("#folio").css("background-color", "rgb(133, 212, 133)");
            break;                                    
        }
    }

    //Set all apps main div to display: none;
    function turnOffAll(){
        $("#pomodoro").css("display", "none");
        $("#calculator").css("display", "none");
        $("#simon").css("display", "none");
        $("#tictactoe").css("display", "none");
        $("#t-overlay").css("display", "none");
        $("#t-overlay2").css("display", "none");    
    }

    
    //About section progress bar animations
    //only display animation when visible
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
      
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
      
        return elementBottom > viewportTop && elementTop < viewportBottom;
      };
      
      $(window).on('resize scroll', function() {
        
          if ($("#skills").isInViewport()) {
            $('.html').animate({width:'80%'},2000);
            $('.css').animate({width:'70%'},2000);
            $('.js').animate({width:'60%'},2000);
            $('.php').animate({width:'40%'},2000);
            $('.python').animate({width:'40%'},2000);
            $('.java').animate({width:'60%'},2000);
          }        
      });     
});