var random1 = Math.floor(Math.random() * 6)+1;
var random2 = Math.floor(Math.random() * 6)+1;
var randomImg1 = "images/dice"+random1+".png"
var randomImg2 = "images/dice"+random2+".png"

function winner(){
    image();
if(random1 < random2){
    document.querySelector("h1").innerHTML="Player 2 wins";
    }else if(random1 === random2){
    document.querySelector("h1").innerHTML="Draw"
    }else {
        document.querySelector("h1").innerHTML="Player 1 wins"
    } 
}

function image(){
    document.querySelector(".img1").setAttribute("src", randomImg1);
    document.querySelector(".img2").setAttribute("src", randomImg2);
}
 winner();

 function refreshPage(){
    window.location.reload();
    
} 