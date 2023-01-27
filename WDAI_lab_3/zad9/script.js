let wizytowka1 = document.getElementById("wizytowka1")
let wizytowka2 = document.getElementById("wizytowka2")
let wizytowka3 = document.getElementById("wizytowka3")
let wizytowka4 = document.getElementById("wizytowka4")
let wizytowka5 = document.getElementById("wizytowka5")
let losowosc = document.getElementById("losowosc")

let iterator = 2

let slajd1 = {
    divek: wizytowka1,
    pozycja: -1400
}
let slajd2 = {
    divek: wizytowka2,
    pozycja: -700
}
let slajd3 = {
    divek: wizytowka3,
    pozycja: 0
}
let slajd4 = {
    divek: wizytowka4,
    pozycja: 700
}
let slajd5 = {
    divek: wizytowka5,
    pozycja: 1400
}

const slajdy = [slajd1, slajd2, slajd3, slajd4, slajd5]

let arrowright = document.getElementById("arrowright")
let arrowleft = document.getElementById("arrowleft")

function slajdright (){
    let miejsce = iterator%5
    for(let i = -2; i<3; i++){
        slajdy[(miejsce+i+5)%5].pozycja += 700
    }
    slajdy[(miejsce+2)%5].pozycja = -1400
    slajdy[(miejsce)].divek.style.transform = `translateX(${slajdy[(miejsce)].pozycja}px)`
    setTimeout(() => {
        slajdy[(miejsce-1+5)%5].divek.style.display = "flex"
        slajdy[(miejsce)].divek.style.display = "none"
    }, 100)
    setTimeout(() => {
        for(let i = -2; i<3; i++){
            slajdy[(miejsce+i+5)%5].divek.style.transform = `translateX(${slajdy[(miejsce+i+5)%5].pozycja}px)`
        }
    },200)
    iterator -= 1
    if(iterator == -1){
        iterator=4
    }
}

function slajdleft (){
    let miejsce = iterator%5
    for(let i = -2; i<3; i++){
        slajdy[(miejsce+i+5)%5].pozycja -= 700
    }
    slajdy[(miejsce-2+5)%5].pozycja = 1400
    slajdy[(miejsce)].divek.style.transform = `translateX(${slajdy[(miejsce)].pozycja}px)`
    setTimeout(() => {
        slajdy[(miejsce+1+5)%5].divek.style.display = "flex"
        slajdy[(miejsce)].divek.style.display = "none"
    }, 100)
    setTimeout(() => {
        for(let i = -2; i<3; i++){
            slajdy[(miejsce+i+5)%5].divek.style.transform = `translateX(${slajdy[(miejsce+i+5)%5].pozycja}px)`
        }
    },200)
    iterator += 1
    if(iterator == -1){
        iterator=4
    }
}


arrowright.addEventListener("click", slajdright)

arrowleft.addEventListener("click", slajdleft)

function losuj(){
    losowosc.removeEventListener("click", losuj)
    let docelowa = Math.floor(Math.random() * 4.99)
    let miejsce = iterator%5
    let przejscia = Math.floor(Math.random() * 1.99)
    if(przejscia==0){
        myInterval = setInterval(() => {
            slajdright()
            miejsce = iterator%5
            if(docelowa == miejsce){
                clearInterval(myInterval)
                return losowosc.addEventListener("click", losuj)
            }
        }, 250);
        
    }
    else{
        myInterval = setInterval(() => {
            slajdleft()
            miejsce = iterator%5
            if(docelowa == miejsce){
                clearInterval(myInterval)
                return losowosc.addEventListener("click", losuj)
            }
        }, 250);
    }
}
losowosc.addEventListener("click", losuj)


