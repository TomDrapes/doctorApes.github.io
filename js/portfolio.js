$(document).ready(function (){
    var currentImage = 0;
    console.log("ready");

    $(".l-arrow").on("click", function(){
        console.log("clicked");
        if(currentImage === 0){
            currentImage = 3;            
        }else{
            currentImage -= 1;
        }
        changeImage(currentImage);
    });
    $(".r-arrow").on("click", function(){
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
                aboutBool = !aboutBool;
            }else{
                $("#about-expand").css("display", "none");
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
                folioBool = !folioBool;
            }else{
                $("#folio-expand").css("display", "none");                
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
                contactBool = !contactBool;
            }else{
                $("#contact-expand").css("display", "none");                
                contactBool = !contactBool;
            }
        }
    });  

    
});