const startBtn = document.getElementById("start");
const cookieBtn = document.getElementById("cookie");
const resultat = document.getElementById("resultat");

let interval;
let timeout;
let debutTemps;

function positionAleatoire() {
  const zone = document.getElementById("zone");

  const maxX = zone.clientWidth - 50;
  const maxY = zone.clientHeight - 50;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  cookieBtn.style.left = x + "px";
  cookieBtn.style.top = y + "px";
}

startBtn.addEventListener("click", () => {

  debutTemps = Date.now();
  resultat.value = "";
  cookieBtn.style.display = "block";

  positionAleatoire();

  interval = setInterval(() => {
    positionAleatoire();
  }, 800);

  timeout = setTimeout(() => {
    clearInterval(interval);
    cookieBtn.style.display = "none";
    resultat.value = "Sale merde";
  }, 10000);
});

cookieBtn.addEventListener("click", () => {

  clearInterval(interval);
  clearTimeout(timeout);

  cookieBtn.style.display = "none";

  const tempsMs = Date.now() - debutTemps;

  // Conversion en secondes avec millièmes
  const tempsSecondes = (tempsMs / 1000).toFixed(3);

  resultat.value = tempsSecondes + " secondes";
});
