let kropa = document.getElementById("kropa")
let obszar = document.getElementById("obszar")
let main = document.getElementById("main")
let miss = document.getElementById("miss")
let flag = true

obszar.addEventListener("click", (event) => {
    var style = obszar.currentStyle || window.getComputedStyle(obszar)
    event.stopPropagation()
    kropa.style.left = (event.x - 25 - obszar.offsetLeft) + "px"
    kropa.style.top = (event.y - 25 - obszar.offsetTop) + "px"
    miss.style.display = "none"
})

main.addEventListener("click", (event)=>{
    miss.style.display="block"
    miss.style.left = event.x + "px"
    miss.style.top = event.y + "px"
} )