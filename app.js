// --------------------Recupération touches/keycode/ecran dans le DOM---------------------

const touches = [...document.querySelectorAll(".bouton")];

const listeKeycode = touches.map((touche) => touche.dataset.key);

const ecran = document.querySelector(".ecran");

// -------------------------Ecouteur Evènnement Touche + Click--------------------------

document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  calculer(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  calculer(valeur);
});

// --------------------------------Fonction de Calcul----------------------------------

const calculer = (valeur) => {
  if (listeKeycode.includes(valeur)) {
    switch (valeur) {
      case "8":
        ecran.textContent = "";
        break;
      case "13":
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;
      default:
        const indexKeycode = listeKeycode.indexOf(valeur);
        const touche = touches[indexKeycode];
        ecran.textContent += touche.innerHTML;
    }
  }
};

// ------------------------------Event Error----------------------------------------

window.addEventListener("error", (e) => {
  alert("Une erreur se trouve dans votre calcul : " + e.message);
});
