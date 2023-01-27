const prepairedData = [];
let conteiner = document.getElementById("conteiner")
let page = 0

fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) =>createData(data));


changePage = (pejgor, dict, dictSum) => {
    page = pejgor
    conteiner.innerHTML = '<div id = "butons"> <div class = "buton" id = "bt1"> 1 </div> <div class = "buton" id = "bt2"> 2 </div> <div class = "buton" id = "bt3"> 3 </div> <div class = "buton" id = "bt4"> 4 </div></div><div id = "columns"><div class = "element">Subregion</div><div class = "element">Population</div><div class = "element">Area</div></div>';

    makeTable(dict, dictSum)
}
    
areaAndPopul = (dict, result) => {
    for(const [key, value] of Object.entries(dict)){
        let tempArea = 0
        let tempPopul = 0
        value.forEach(country => {
            tempArea += country.area
            tempPopul += country.population
        })
        result[key] = {
            area: tempArea,
            popul: tempPopul 
        }
    }
}


makeDict = (dict) => {
    prepairedData.forEach(element => {
        temp = element.subregion
        if(!dict.hasOwnProperty(temp) && typeof element.subregion != 'undefined'){
            dict[temp] = []
        }
        if(typeof element.name != 'undefined' && typeof element.capital != 'undefined' && typeof element.subregion != 'undefined'){
            let tempObj = {
                name: element.name.common,
                capital: element.capital[0],
                population: element.population,
                area: element.area
            }
            dict[temp].push(tempObj)
        }
        })
}

makeTable = (dict, dictSum) => {
    let count = -1;
    console.log(page)
    for(const [key, value] of Object.entries(dict)){
        count += 1;
        if(!(count >= page*7 && count < (page+1)*7)) continue;
        let record = document.createElement("div")
        record.classList.add("record")
        let subregion = document.createElement("div")
        subregion.innerHTML = key
        subregion.classList.add("element")
        let subPopulation = document.createElement("div")
        subPopulation.innerHTML = dictSum[key].popul
        subPopulation.classList.add("element")
        let subArea = document.createElement("div")
        subArea.innerHTML = dictSum[key].area
        subArea.classList.add("element")
        let arrow = document.createElement("div")
        arrow.classList.add("arrow")
        arrow.innerHTML += '<span class="material-symbols-outlined">expand_more</span>'
        record.appendChild(subregion)
        record.appendChild(subPopulation)
        record.appendChild(subArea)
        record.appendChild(arrow)
        conteiner.appendChild(record)

        let countries = document.createElement("div")
        countries.classList.add("countries")
        let subrecord = document.createElement("div")
        subrecord.classList.add("subrecord")
        let col1 = document.createElement("div")
        col1.innerHTML = "Name"
        let col2 = document.createElement("div")
        col2.innerHTML = "Capitol"
        let col3 = document.createElement("div")
        col3.innerHTML = "Population"
        let col4 = document.createElement("div")
        col4.innerHTML = "Area"
        col1.classList.add("element2")
        col2.classList.add("element2")
        col3.classList.add("element2")
        col4.classList.add("element2")
        subrecord.appendChild(col1)
        subrecord.appendChild(col2)
        subrecord.appendChild(col3)
        subrecord.appendChild(col4)
        countries.appendChild(subrecord)
        value.forEach(country => {
            let countryRecord = document.createElement("div")
            countryRecord.classList.add("subrecord")
            let name = document.createElement("div")
            name.classList.add("element2")
            name.innerHTML = country.name
            let capital = document.createElement("div")
            capital.classList.add("element2")
            capital.innerHTML = country.capital
            let population = document.createElement("div")
            population.classList.add("element2")
            population.innerHTML = country.population
            let area = document.createElement("div")
            area.classList.add("element2")
            area.innerHTML = country.area
            countryRecord.appendChild(name)
            countryRecord.appendChild(capital)
            countryRecord.appendChild(population)
            countryRecord.appendChild(area)
            countries.appendChild(countryRecord)
        })
        arrow.addEventListener("click", () => {
            if(countries.style.display == "flex"){
                countries.style.display = "none"
            }
            else{
                countries.style.display = "flex"
            }
        })
        countries.style.display = "none"
        conteiner.appendChild(countries)
    }

    for(let i = 1; i<=4; i++) {
        let bt = document.getElementById(`bt${i}`)
        bt.addEventListener("click", (event) => {
            changePage(i-1, dict, dictSum)
        })
    }
    
}

createData = (data) =>{
    for (value of data) {
        prepairedData.push(value)
    }

    let dict = {}

    makeDict(dict)
    console.log(dict)
    let dictSum = {}
    areaAndPopul(dict, dictSum)

    makeTable(dict, dictSum)
}


/* potrzebne rzeczy:
name - common ale nie wszystkie maja name i je trzeba wyrzucic
Capital - ale on siedzi w tablicy
population - jako liczba jest
area - liczba
WSZYSTKO POGRUPOWANE WEDLE SUBREGIONU*/