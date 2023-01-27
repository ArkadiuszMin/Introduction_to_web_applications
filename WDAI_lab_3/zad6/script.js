let wpisy = document.getElementById("wpisy")
let dane = document.getElementById("dane")
let numer = document.getElementById("numer")
let dodaj = document.getElementById("dodaj")

dodaj.addEventListener("click", ()=>{
    let licznikSpacji = 0
    let flagaTelefon = true
    let flagaImie = true
    let telefon = numer.value
    let imie = dane.value
    dane.value = ''
    numer.value = ''
    let temp = telefon.replaceAll(' ', '')
    if(temp.length == 9 && temp[0] <= '9' && temp[0] >= '0' || (temp[0]=='+' && temp[1]=='0' && temp.length==13) || (temp[0] == '0' && temp.length==12)){
        for(let i = 1; i<temp.length; i++){
            if(!(temp[i] >= '0' && temp[i]<= '9')){
                flagaTelefon = false
            }
        }
    }
    else{
        flagaTelefon = false
    }

    if(imie[0] >= 'A' && imie[0] <= 'Z'){
        for(let i = 1; i < imie.length; i++){
            if(imie[i]==' ' || imie[i]=='-'){
                licznikSpacji += 1
                
                if(!(imie[i+1] >= 'A' && imie[i+1] <= 'Z')){
                    flagaImie = false
                }
                i += 1
            }
            else if(!(imie[i] >= 'a' && imie[i] <= 'z')){
                flagaImie = false
            }
        }
        if(licznikSpacji > 2 || licznikSpacji < 1){
            flagaImie = false
        }
    }
    else{
        flagaImie=false
    }
    console.log(flagaImie)



    if(flagaTelefon && flagaImie){
        let wpis = document.createElement("div")
        wpis.classList.add("wpis")
        let osoba = document.createElement("div")
        osoba.classList.add("osoba")
        wpis.appendChild(osoba)
        let gora = document.createElement("div")
        gora.classList.add("gora")
        gora.innerHTML = imie
        let dol = document.createElement("div")
        dol.classList.add("dol")
        dol.innerHTML = telefon
        osoba.appendChild(gora)
        osoba.appendChild(dol)
        let kosz = document.createElement("div")
        let guzik = document.createElement("span")
        guzik.classList.add("material-symbols-outlined")
        guzik.innerHTML = "delete"
        kosz.appendChild(guzik)
        kosz.classList.add("kosz")
        wpis.appendChild(kosz)
        wpisy.appendChild(wpis)
        kosz.addEventListener("click", ()=>{
            wpis.remove()
        })

    }
})
