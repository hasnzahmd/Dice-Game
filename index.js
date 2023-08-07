
document.querySelector("button").addEventListener("click", ()=> {
    play();
    addAnimation();

})

document.addEventListener('keydown', ()=> {
    play();
    addAnimation();
})

function play()
{
    //dice number for player 1
    var randomNumber1 = Math.floor(Math.random()*6+1);
    var randomImageSource = "./images/dice"+randomNumber1+".png";
    document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

    //dice number for player 2
    var randomNumber2 = Math.floor(Math.random()*6+1);
    var randomImageSource2 = "./images/dice"+randomNumber2+".png";
    //adds the relevant dice image to the image container
    document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


    if(randomNumber1 > randomNumber2)
        document.querySelector("h1").textContent = "🚩 Player 1 Wins!";

    else if(randomNumber1 < randomNumber2)
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩";

    else
        document.querySelector("h1").textContent = "Draw!";
}

function addAnimation(){
    var btn = document.querySelector("button");
    btn.classList.add("pressed");
    setTimeout( ()=> {btn.classList.remove("pressed")} , 200);
}