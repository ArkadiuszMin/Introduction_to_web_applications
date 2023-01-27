let niebieski = document.getElementById("niebieski")
let czerwony = document.getElementById("czerwony")
let zolty = document.getElementById("zolty")
let propagation = document.getElementById("propagation")
let reset = document.getElementById("reset")
let order = document.getElementById("order")
let licznik = document.getElementById("licznik")
let komunikaty = document.getElementById("komunikaty")
let liczniczek = 0
let flagOrder = true
let flag = false
licznik.innerHTML = liczniczek

function turnOff(){
    if(liczniczek > 30){
        czerwony.style.backgroundColor = "rgb(128, 85, 85)"
    }
    if(liczniczek > 50){
        zolty.style.backgroundColor = "rgb(138, 138, 83)"
    }
}

function addNoPag(number, nazwa){
    liczniczek+=number
    licznik.innerHTML = liczniczek
    let komunikat = document.createElement("div")
    komunikat.innerHTML = `nacisnąłeś ${nazwa} o wartości ${number}`
    komunikaty.appendChild(komunikat)

}

const blueClick = (event)=>{
    if(flag){
        event.stopPropagation()
    }
    addNoPag(1, "niebieski")
    turnOff()
    
}

niebieski.addEventListener("click", blueClick, flagOrder)

const redClick = (event)=>{
    if(liczniczek <= 30){
        if(flag){
            event.stopPropagation()
        }
        addNoPag(2, "czerwony")
        turnOff()
    }
    
}

czerwony.addEventListener("click", redClick, flagOrder)

const yellowClick = (event)=>{
    if(liczniczek <= 50){
        if(flag){
            event.stopPropagation()
        }
        addNoPag(5, "żółty")
    }
    turnOff()
}

zolty.addEventListener("click", yellowClick , flagOrder)

propagation.addEventListener("click", ()=>{
    if(flag){
        flag = false
        propagation.innerHTML = "Start propagation"
    }
    else{
        flag = true
        propagation.innerHTML = "Stop propagation"
    }
})

reset.addEventListener("click", ()=>{
    liczniczek = 0
    czerwony.style.backgroundColor = "red"
    zolty.style.backgroundColor = "yellow"
    licznik.innerHTML = liczniczek
    komunikaty.innerHTML = ''
})

order.addEventListener("click", ()=> {
    niebieski.removeEventListener("click", blueClick, flagOrder)
    czerwony.removeEventListener("click", redClick, flagOrder)
    zolty.removeEventListener("click", yellowClick, flagOrder)
    flagOrder = !flagOrder
    niebieski.addEventListener("click", blueClick, flagOrder)
    czerwony.addEventListener("click", redClick, flagOrder)
    zolty.addEventListener("click", yellowClick, flagOrder)
})