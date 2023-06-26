document.addEventListener("DOMContentLoaded", function() {
    window.onload = function (){
        document.querySelector(".menuMobile").addEventListener("click", function(){
            if(document.querySelector(".menu nav ul").style.display === "none") {
            document.querySelector(".menu nav ul").style.display = "flex";
            console.log("if");
            } else {
                document.querySelector(".menu nav ul").style.display = "flex";
                console.log("else");
            }
        });
    };    
});