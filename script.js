let slider = document.querySelector('.slide');
let sliderInd = document.querySelectorAll('.card_piloto');
let contador = 1;
let intervalo = 2000;
let sizeWidth = sliderInd[0].clientWidth;
let isHovered = false;

slider.addEventListener('mouseenter', () => {
  isHovered = true;
});

slider.addEventListener('mouseleave', () => {
  isHovered = false;
});

setInterval(function () {
  slides();
}, intervalo);

function slides() {
  if (!isHovered) {
    slider.style.transform = "translate(" + (-sizeWidth * contador) + "px)";
    slider.style.transition = "transform 1s";
    console.log(contador);
    console.log(sliderInd.length)    
    contador++;

    if (contador === sliderInd.length) {
      contador = 1;
      setTimeout(() => {
        slider.style.transform = "translate(0px)";
        slider.style.transition = "transform 0s";
      }, intervalo);
    }
  }
}
