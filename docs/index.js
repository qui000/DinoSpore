let background = document.getElementById("background");
let click = addEventListener("click",changeBack);


//document.getElementById("background").addEventListener("click", changeBack);

background.click;



function changeBack() {
    console.log("starting: "+ background.src);
    if (background.src == "https://dinospore.com/Background%20Placeholder.png"){
        background.src = "https://dinospore.com/garf.jpg";
        console.log("the 'bckgrn' ran > "+background.src);


    }
    console.log("ending: "+ background.src);
    
    

}
