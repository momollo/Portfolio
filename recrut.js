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

        // Le 2e bouton grossit
        scale += 0.5;
        boutonGrossie.style.transform = "scale(" + scale + ")";
    }

    boutonFuyant.addEventListener("mouseenter", bougeBouton);
    
});

document.getElementById('boutonGrossie').addEventListener('click', () => {
  document.getElementById('popupOui').style.display = 'flex';
});

function fermerPopup() {
  document.getElementById('popupOui').style.display = 'none';
}

// Fermer en cliquant en dehors
document.getElementById('popupOui').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) fermerPopup();
});