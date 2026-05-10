 var  randomNumber1 = Math.floor(Math.random()*6)+1

 var randomDiceImage = "dice"+ randomNumber1+".png";

 var randomImageSource1 = "images/"+randomDiceImage;

 var image1=document.querySelectorAll(".img1")[0];
    image1.setAttribute("src",randomImageSource1);



 var  randomNumber2 = Math.floor(Math.random()*6)+1

 var randomDiceImage2 = "dice" + randomNumber2+".png";
 var randomImageSource2 = "images/"+randomDiceImage2

 document.querySelector(".img2").setAttribute("src",randomImageSource2)


 if(randomNumber1>randomNumber2)
 {
document.querySelector('h1').innerHTML="Player 1 is the Winner"
 }
 else  if(randomNumber1<randomNumber2)

    {
document.querySelector('h1').innerHTML="Player 2 is the Winner"


    }

    else{
       document.querySelector('h1').innerHTML="Match Draw. Try Again"
 
    }


