for (i = 0;i<11;i++){
    if (i%2 ===0){
        console.log(i)
    }

}

function displayinfo(artType){
    document.getElementById("art-title").innerHTML = `${artType}`;

    if (artType == "Modern Art"){
        document.getElementById("art-info").innerHTML = "Modern art is modern";
    } else if (artType == "Abstract Art"){
        document.getElementById("art-info").innerHTML = "Abstract art is abstract";
    } else if (artType == "Surrealism"){
        document.getElementById("art-info").innerHTML = "Surrealism is psychedelic";
    } else if (artType == "Realism"){
        document.getElementById("art-info").innerHTML = "Realism is real";
    }
}

document.getElementById("modernbut").addEventListener("click", function(){
    displayinfo("Modern Art");

})
document.getElementById("abstractbut").addEventListener("click", function(){
    displayinfo("Abstract Art");

})
document.getElementById("realbut").addEventListener("click", function(){
    displayinfo("Realism");

})
document.getElementById("surrealbut").addEventListener("click", function(){
    displayinfo("Surrealism");
    document.getElementById("image-block").innerHTML = `<img class = "art-example" src = "images/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg.webp">`;

})

