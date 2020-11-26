let slider = document.querySelector(".contenedor__slider")
let sliderIndividual = document.querySelectorAll(".contenedor__slider__contenido")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3250;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides()
}, intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s"
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0)";
            slider.style.transition = "transform 0s";
            contador = 1;
        },1500)
    }
}