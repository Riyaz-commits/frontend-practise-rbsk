$("h1").addClass("big-title")
 setTimeout(() => {
    $("h1").removeClass("big-title")
  }, 1001);



 $("button").click(function(){

        $("h1").css("color","purple")


})
 

$("input").keypress(function(event)
{
        $("h1").text(event.key).css("color","purple")

})


$("h1").on("mouseover",function()
{
        $("h1").text(event.key).css("color","red")

})


/* for(var i=0; i<5;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
{
    document.querySelector("h1").style.color="green";

    
})
} */
