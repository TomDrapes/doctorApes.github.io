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
            case 0: $("#portfolio").css("background", "url('img/calculator.png')");
            break;
            case 1: $("#portfolio").css("background", "url('img/simon.png')");
            break;
            case 2: $("#portfolio").css("background", "url('img/tictactoe.png')");
            break;
            case 3: $("#portfolio").css("background", "url('img/pomodoro.png')");
            break;
            
        }
    }
});