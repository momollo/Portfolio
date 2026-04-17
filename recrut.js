document.addEventListener("DOMContentLoaded", () => {
    const boutonFuyart = document.getElementById("boutonFuyant");
    const boutonGrossie = document.getElementById("boutonGrossie")

        let scale = 1;
 
    function bougeBouton() {
        const maxX = window.innerWidth - boutonFuyant.offsetWidth;
        const maxY = window.innerHeight - boutonFuyant.offsetHeight;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        boutonFuyant.style.position = "absolute";
        boutonFuyant.style.left = x + "px";
        boutonFuyant.style.top = y + "px";

        // 👉 Le 2e bouton grossit
        scale += 0.5;
        boutonGrossie.style.transform = "scale(" + scale + ")";
    }

    boutonFuyant.addEventListener("mouseenter", bougeBouton);
    
});

document.getElementById("boutonGrossie").addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/watch?v=Aq5WXmQQooo";
});