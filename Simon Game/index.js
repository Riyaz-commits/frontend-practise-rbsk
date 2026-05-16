let buttonColours =["red", "blue", "green", "yellow"]

let randomNumber =  ()=>
{
return Math.round( Math.random()*3)
}

let randomChosenColour = buttonColours[randomNumber()];
let selectedColor;
console.log(randomChosenColour)


$("#"+randomChosenColour).animate({opacity: 0.5}, 500);

$(".btn").on("click", function () {
  $(this).addClass("pressed");
   selectedColor=  $(this).attr("id");
  if(selectedColor==randomChosenColour)
  {playAudioGame(selectedColor)}
  else{
    playAudioGame("wrong")
  }
   
  setTimeout(() => {
    $(this).removeClass("pressed");
  }, 1000);
});

function playAudioGame(sound)
{
    var audio;
    switch (sound)
    {
        case 'blue':
         audio = new Audio('soundsColor/blue.mp3'); 
           audio.play(); 
        break;
         case 'green':
         audio = new Audio('soundsColor/green.mp3');  
           audio.play();
        break;
         case 'red':
         audio = new Audio('soundsColor/red.mp3');
           audio.play();  
        break;
         case 'yellow':
         audio = new Audio('soundsColor/yellow.mp3'); 
           audio.play(); 
        break;
          case 'wrong':
         audio = new Audio('soundsColor/wrong.mp3');
           audio.play();  
        break;
        
        default:
            console.error("Invalid color");
            
    }
  
}

$(document).on("keypress", function(event) {
  if (event.key === "a" || event.key === "A") {
    location.reload(); // refresh the DOM (reloads the page)
  }
});