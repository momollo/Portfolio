let typed = "";

// Création du faux curseur
const dot = document.createElement("div");
dot.classList.add("rainbow-dot");
document.body.appendChild(dot);

// Suivi de la souris
document.addEventListener("mousemove", (e) => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
});

// Détection du mot "egg"
document.addEventListener("keydown", (e) => {
  typed += e.key.toLowerCase();
  typed = typed.slice(-3);

  if (typed === "egg") {
    document.body.classList.add("rainbow-cursor");
  }
});