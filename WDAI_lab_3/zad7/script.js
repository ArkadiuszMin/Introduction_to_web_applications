let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")
let e_1 = document.getElementById("e_1")
let e_2 = document.getElementById("e_2")
let e_3 = document.getElementById("e_3")
let f = document.getElementById("f")
let g_1 = document.getElementById("g_1")
let g_2 = document.getElementById("g_2")
let g_3 = document.getElementById("g_3")


const getCities = (callback) => {
    fetch("http://localhost:3000/cities")
        .then((data) => data.json())
        .then((data) => callback(data))
}

function zadanie1() {
    getCities((cities) => {
        let miasta = cities.filter((city) => {
            return city.province == "małopolskie"
        })
        let wynik = miasta.map((city) => {
            return city.name
        })
        a.innerHTML = wynik
    })
}


function zadanie2() {
    getCities((cities) => {
        let miasta = cities.filter((city) => {
            return city.name.split('a').length == 3
        })
        let wynik = miasta.map((city) => {
            return city.name
        })
        b.innerHTML = wynik
    })
}

function zadanie3() {
    getCities((cities) => {
        let miasta = cities.sort((a, b) => {
            return b.dentensity - a.dentensity
        })
    
        let wpis = `${miasta[4].name}: ${miasta[4].dentensity}`
        c.innerHTML = wpis
    })
}

function zadanie4(){
    getCities((cities) => {
        let miasta = cities.filter((city)=>{
            return city.people > 100000
        })
        let wynik = miasta.map((city)=> {
            return `${city.name} city`
        })
        d.innerHTML = wynik
    })
}

function zadanie5(){
    getCities((cities) => {
        let mniejsze = cities.filter((city) => {
            return city.people < 80000
        })
        let wieksze = cities.filter((city) => {
            return city.people > 80000
        })
        e_1.innerHTML = `Ilość miast poniżej 80000: ${mniejsze.length}`
        e_2.innerHTML = `Ilość miast powyżej 80000: ${wieksze.length}`
        e_3.innerHTML = "Wiecej jest miast poniżej 80000"
    })
}

function zadanie6(){
    getCities((cities) => {
        let miasta = cities.filter((city) => {
            return city.name[0] == 'P'
        })
        let powierzchnia = miasta.reduce((total, city) => {
            return total + city.area
        }, 0)
        let wynik = powierzchnia/miasta.length
        f.innerHTML = wynik
    })
}

function zadanie7(){
    getCities((cities) => {
        let miasta1 = cities.filter((city) => {
            return city.province == "pomorskie"
        })
        let miasta2 = miasta1.filter((city) => {
            return city.people > 5000
        })
        g_1.innerHTML = `Wszystkie miasta w pomorskim: ${miasta1.length}`
        g_2.innerHTML = `Miasta powyżej 5000 osób: ${miasta2.length}`
        g_3.innerHTML = "Nie"
    })
}


zadanie1()

zadanie2()

zadanie3()

zadanie4()

zadanie5()

zadanie6()

zadanie7()


/*
drugi sposob fajny podobno ale preferuje gorny
const getCities2 = async () => {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:3000/cities")
        .then((data) => data.json())
        .then((data) => {
            resolve(data);
        })
    })
}

async function zadanie() {
    let cities = await getCities2();
    console.log(cities)
}
zadanie()
*/