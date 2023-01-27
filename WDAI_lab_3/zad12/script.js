let score = document.getElementById("score")
let board = document.getElementById("board")
let celownik = document.getElementById("celownik")
let heart1 = document.getElementById("heart1")
let heart2 = document.getElementById("heart2")
let heart3 = document.getElementById("heart3")
let hearts = [heart1, heart2, heart3]
const end = -300
const begin = window.innerWidth
const levels = [5 , 10, 15, 20, 25, 30, 35]
let licznik = 0
let pozycja = 1800
let lives = 3

const restart = (event)=>{
    if(event.key == 'r'){
        licznik = 0
        lives = 3
        hearts.forEach((heart)=> {
            heart.style.display = "block"
        })
        odpal()
        document.removeEventListener("keydown", restart)
    }
}

window.addEventListener("mousemove", (event)=>{
    celownik.style.left = (event.x - 38) + "px"
    celownik.style.top = (event.y - 35) + "px"
})

function makeScore(value){
    licznik += value
    console.log(licznik)
    let wynik = (Math.abs(licznik)).toString()
    let iterator = wynik.length
    for(let i = 0; i<5-iterator; i++){
        wynik = "0" + wynik
    }
    if(licznik < 0){
        wynik = "-" + wynik
    }
    score.innerHTML = wynik
}

function boardClick(){
    makeScore(-6)
}



function spawn(){
    //tworzenie zombiaczka
    let pozycja = 1800
    let lefcik = begin
    let zombiak = document.createElement("div")
    board.appendChild(zombiak)
    zombiak.classList.add("zombie")
    zombiak.style.left = begin + "px"

    //losowanie wielkosci, wysokosci startowej oraz predkosci
    let k = Math.random()*2 + 0.5
    zombiak.style.transform = `scale(${k}, ${k})`
    let h = Math.random()*45 + 5
    zombiak.style.bottom = h + "px"
    let level = Math.floor(Math.random()*5.99)

    //dawanie punktow za strzal
    zombiak.addEventListener("click", (event)=>{
        event.stopPropagation()
        clearInterval(animacja)
        zombiak.remove()
        makeScore(12)
    })

    //animacja poruszania sie zombiaka
    const animacja = setInterval(() => {
        pozycja -= 200
        if(pozycja<0){
            pozycja=1800
        }
        if(lives <= 0){
            clearInterval(animacja)
            zombiak.remove()
            return
        }
        zombiak.style.backgroundPositionX = pozycja + "px"
        lefcik -= levels[level]
        zombiak.style.left = lefcik + "px"
        if(lefcik <= end){
            clearInterval(animacja)
            zombiak.remove()
            lives -= 1
            hearts[lives].style.display = "none"
            return    
        }
    }, 25)
}

function odpal(){
    board.addEventListener("click", boardClick)
    makeScore(0)
    const spawner = setInterval(()=>{
        spawn()
        if(lives <= 0){
            board.removeEventListener("click", boardClick)
            clearInterval(spawner)
            document.addEventListener("keydown", restart)
            return
        }
    }, 700)
}

odpal()