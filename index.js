let background = document.getElementById("background");
let click = addEventListener("click",changeBack);


//document.getElementById("background").addEventListener("click", changeBack);

background.click;



function changeBack() {
    console.log("starting: "+ background.src);
    if (background.src == "http://127.0.0.1:5500/Background%20Placeholder.png"){
        background.src = "http://127.0.0.1:5500/garf.jpg";
        console.log("the 'bckgrn' ran > "+background.src);


    }
    console.log("ending: "+ background.src);
    
    

}
