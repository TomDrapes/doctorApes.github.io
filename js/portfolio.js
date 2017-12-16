$(document).ready(function (){
    var currentImage = 0;
    console.log("ready");

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

    function turnOffAll(){
        $("#pomodoro").css("display", "none");
        $("#calculator").css("display", "none");
        $("#simon").css("display", "none");
        $("#tictactoe").css("display", "none");
        $("#t-overlay").css("display", "none");
        $("#t-overlay2").css("display", "none");
    }

    var aboutBool = true;
    $("#about").on("click", function(){        
        var windowWidth = window.outerWidth; 
        if(windowWidth < 700){
            if(aboutBool){
                $("#about-expand").css("display", "block");
                $("#about").css("height", "auto");
                aboutBool = !aboutBool;
            }else{
                $("#about-expand").css("display", "none");
                $("#about").css("height", "100%");
                aboutBool = !aboutBool;
            }
        }
    });
    
    var folioBool = true;
    $("#port").on("click", function(){
        var windowWidth = window.outerWidth;
        if(windowWidth < 700){
            if(folioBool){
                $("#folio-expand").css("display", "block");
                $("#folio").css("height", "auto");
                folioBool = !folioBool;
            }else{
                $("#folio-expand").css("display", "none");                
                $("#folio").css("height", "100%");
                folioBool = !folioBool;
            }
        }
    });
    
    var contactBool = true;
    $("#contact").on("click", function(){
        var windowWidth = window.outerWidth;
        if(windowWidth < 700){
            if(contactBool){
                $("#contact-expand").css("display", "block");
                $("#contact").css("height", "auto");
                contactBool = !contactBool;
            }else{
                $("#contact-expand").css("display", "none");                
                $("#contact").css("height", "100%");
                contactBool = !contactBool;
            }
        }
    });  

    //About section progress bar animations
    $('.html').animate({width:'80%'},2000);
    $('.css').animate({width:'70%'},2000);
    $('.js').animate({width:'60%'},2000);
    $('.php').animate({width:'50%'},2000);
    $('.python').animate({width:'40%'},2000);
    $('.java').animate({width:'60%'},2000);
});