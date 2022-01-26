var Player1S =0;
var Player2S =0;

var PlayerTurn = 1;
var current =0;

reset();

$('.buttonRoll').click(function (){
    $('.button').attr('disabled', 'disabled');
    for(let i = 0; i<16;i++){
        current = diceRoll(i,16);

    }
    setTimeout(function () {
        $('.button').removeAttr('disabled');
        result();
        if(current != 1){
            updateCurrent();
        }
    }, 1600);
});


$('.buttonNewGame').click(function (){
    $('.button').attr('disabled', 'disabled');
    setTimeout(function () {
        $('.button').removeAttr('disabled');
        result();
        if(current != 1){
            reset()
        }
    }, 600);
});


$('.buttonHold').click(function (){
    $('.button').attr('disabled', 'disabled');
    setTimeout(function () {
        $('.button').removeAttr('disabled');
        result();
        if(current != 1){
            updateScore();
        }
    }, 100);
});


function reset(){
    document.getElementById("Player1").style.fontWeight = "700";
    document.getElementById("Player2").style.fontWeight = "300";

    document.getElementById("Score1").innerHTML = 0;
    document.getElementById("Player1C").innerHTML = 0;

    document.getElementById("Score2").innerHTML = 0;
    document.getElementById("Player2C").innerHTML = 0;
}

function updateScore(){
    if(PlayerTurn == 1){
        cscore = $('#Player1C').text();
        var a = parseInt(cscore);
        text = $('#Score1').text();
        var b = parseInt(text);
        document.getElementById("Score1").innerHTML = (a+b);
        checkWinner(a+b);
        document.getElementById("Player1C").innerHTML = 0;
        PlayerTurn = 2;
        document.getElementById("Player1").style.fontWeight = "300";
        document.getElementById("Player2").style.fontWeight = "700";
    }
    else{
        cscore = $('#Player2C').text();
        var a = parseInt(cscore);
        text = $('#Score2').text();
        var b = parseInt(text);
        document.getElementById("Score2").innerHTML = (a+b);
        checkWinner(a+b);
        document.getElementById("Player2C").innerHTML = 0;
        PlayerTurn = 1;
        document.getElementById("Player1").style.fontWeight = "700";
        document.getElementById("Player2").style.fontWeight = "300";
    }
}

function checkWinner(number){
    if(number >= 100){
        if(PlayerTurn == 1){
            document.getElementById("Score1").innerHTML = "Winner";
            document.getElementById("Score2").innerHTML = "Loser";
        }
        else{
            document.getElementById("Score1").innerHTML = "Loser";
            document.getElementById("Score2").innerHTML = "Winner";
        }
    }
}

function updateCurrent(){
    if(PlayerTurn == 1){
        text = $('#Player1C').text();
        var b = parseInt(text);
        document.getElementById("Player1C").innerHTML = (b+current);
    }
    else{
        text = $('#Player2C').text();
        var b = parseInt(text);
        document.getElementById("Player2C").innerHTML = (b+current);
    }
}

function result(){

    if(current == 1){
        if(PlayerTurn == 1){
            document.getElementById("Player1C").innerHTML = 0;
            PlayerTurn = 2;
            document.getElementById("Player1").style.fontWeight = "300";
            document.getElementById("Player2").style.fontWeight = "700";
        }
        else{
            document.getElementById("Player2C").innerHTML = 0;
            PlayerTurn = 1;
            document.getElementById("Player1").style.fontWeight = "700";
            document.getElementById("Player2").style.fontWeight = "300";
        }
    }


}

function diceRoll(actual, max){

    var number = 1 + Math.floor(Math.random() * 6);
    var down = max/2;

    if (actual < down){
        $('.dice').animate({
            height: '+=10px',
            width: '+=10px'
        },80, function(){
            document.getElementsByClassName('dice')[0].style.backgroundImage = "url(../images/Dice/D"+number+".png)";
        });
    }
    else{
        $('.dice').animate({
            height: '-=10px',
            width: '-=10px'
        },80,function(){
            document.getElementsByClassName('dice')[0].style.backgroundImage = "url(../images/Dice/D"+number+".png)";
        });
    }
    return number;
}