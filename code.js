const buttonHeader = document.querySelector(".button-header-open")
const opacity = document.querySelector(".opacity")
//colocar el que se vera al oprimir tambien en una variable
const mainHamburguer = document.querySelector(".main-hamburguer-default")
buttonHeader.addEventListener("click",() =>{
opacity.classList.toggle("opacity-on")
mainHamburguer.classList.toggle("main-hamburguer")
buttonHeader.classList.toggle("button-header-close")
buttonHeader.classList.toggle("button-header-open")
})

const ulArrow = document.querySelectorAll(".main-item>a") 
const mainUlTwho = document.querySelectorAll(".main-ul-two")
const ulArrow2 = document.querySelectorAll(".ul-arrow-down")

ulArrow.forEach((item,index) =>{
    item.addEventListener("click",() =>{
        ulArrow2[index].classList.toggle("ul-arrow-up");
        ulArrow2[index].classList.toggle("ul-arrow-down");
        if(item.addEventListener){
            
            mainUlTwho[index].classList.toggle("main-ul-two")
            mainUlTwho[index].classList.toggle("main-ul-two-height")
        }
})
})



