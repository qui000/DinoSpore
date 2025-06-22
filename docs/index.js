let background = document.getElementById("background");
let character = document.getElementById("character");
let commandsInv = document.getElementById("commands&inv");
let descrip = document.getElementById("descriptionBox");
let commandBox = document.getElementById("commandBox");

console.log("the file ran")

function commandRecieved(){
    playerInput = document.forms[0].playerInput.value
    console.log("the function ran");
    console.log(playerInput);

    if(playerInput == "move north"){
        console.log('check ran')
        background.src = "dinospore.com\garf.jpg";


    }


}
// "http://127.0.0.1:5500/Background%20Placeholder.png"
//document.getElementById("background").addEventListener("click", changeBack);



