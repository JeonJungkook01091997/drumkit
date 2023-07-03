for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll("button")[i].addEventListener("click", function()
{
    var inertia= this.innerHTML;
    sound(inertia);
    animation(inertia);
});

document.addEventListener("keypress", function(event){
    sound(event.key);
    animation(event.key);
     });
     function sound(key)
     {
        switch(key)
    {
        case "k":
            var audio1 = new Audio("sounds/crash.mp3");

    audio1.play();
    break; 
    case "w":
        var audio2 = new Audio("sounds/tom-1.mp3");

           audio2.play();
           break; 

      case "j":
    var audio3 = new Audio("sounds/snare.mp3");

     audio3.play();
        break; 
      case "a":
    var audio4 = new Audio("sounds/tom-2.mp3");

         audio4.play();
           break; 
           case "s":
            var audio5 = new Audio("sounds/tom-3.mp3");

    audio5.play();
    break; 
    case "d":
        var audio6 = new Audio("sounds/tom-4.mp3");

audio6.play();
break; 
            case "l":
    
     var audio7 = new Audio("sounds/kick-bass.mp3");

    audio7.play(); break;
    default: console.log(inertia);
    }
     } }
     function animation(currentkey)
{
var activeButton=document.querySelector("."+currentkey);
activeButton.classList.add("pressed");
setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);
}
    
     