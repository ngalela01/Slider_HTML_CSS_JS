const slide = ["element-1.png", "element-2.png", "element-3.png"];
let image = document.getElementById("image");

let btnSuivant = document.querySelector(".btn-suivant");
let btnPrecedent = document.querySelector(".btn-precedent");

let numero = 0;
btnSuivant.addEventListener("click", () => {
  numero += 1;
  if (numero >= slide.length) {
    numero = 0;
  }
  image.src = `images/${slide[numero]}`;
});

btnPrecedent.addEventListener("click", () => {
  numero -= 1;
  if (numero < 0) {
    numero = slide.length - 1;
  }
  image.src = `images/${slide[numero]}`;
});
