var character = document.getElementById("character");

document.addEventListener("click", function(event) {
    jump ();
})
 
function jump () {
    if (character.classList != 'animate') {
        character.classList.add('animate')
    }
    setTimeout(function(){
        character.classList.remove('animate')
    }, 300)
} 
let isAlive = setInterval (function () {
    let dino = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
    let cactus = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    if (cactus < 50 && cactus > 0 && dino >= 140){
    alert('GAME OVER')
}
}, 10)

















// var character = document.getElementById("character");
// var block = document.getElementById("block");
// function jump(){
//        if(character.classList !="animate"){
//             character.classList.add("animate");
//        } 
//        character.classList.add("animate");
//        setTimeout(function (){
//             character.classList.remove("animate");
//        }, 300)
//     }
// var checkDead = setInterval(function(){
//   var characterTop =  parseInt(window.getComputedStyle(
//    charaster) = getPropertyValue("top"));
//     var blockLeft =  parseInt(window.getComputedStyle(block).
//     getPropertyValue("left"));
//     if(blockLeft<20 && blockLeft>0 && characterTop>=130){
//        block.style.animation = "none";
//        block.style.display = "none";
       
//         alert("u lose :(");
//     }
// },10);




// var character = document.getElementById("character");

// document.addEventListener("click",  jump);
 
// function jump () {
//     if(character.classList.contains("animate") == true) {
//         return;
//     } else {
//         character.classList.add("animate");
//         setTimeout(removeJump, 300); /*скорость прыжка*/ 
//     }
// } 

// function removeJump () {
//     character.classList.remove("animate");
// }