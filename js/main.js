const box = document.querySelector("div#ani3");

document.querySelector("#start").addEventListener("click", function(){
    box.computedStyleMap.animationPlayState = "running";
})