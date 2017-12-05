$(document).ready(function (){
    var currentImage = 0;
    console.log("ready");

    $("#left").on("click", function(){
        console.log("clicked");
        if(currentImage === 0){
            currentImage = 3;            
        }else{
            currentImage -= 1;
        }
        changeImage(currentImage);
    });
    $("#right").on("click", function(){
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
});