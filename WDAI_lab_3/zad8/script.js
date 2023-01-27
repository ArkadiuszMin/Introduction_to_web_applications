let on1 = document.getElementById("on1")
let on2 = document.getElementById("on2")
let off1 = document.getElementById("off1")
let off2 = document.getElementById("off2")
let pwd = document.getElementById("pwd")
let reppwd = document.getElementById("reppwd")
let grey1 = document.getElementById("grey1")
let grey2 = document.getElementById("grey2")
let grey3 = document.getElementById("grey3")
let grey4 = document.getElementById("grey4")
let green1 = document.getElementById("green1")
let green2 = document.getElementById("green2")
let green3 = document.getElementById("green3")
let green4 = document.getElementById("green4")
let niezgodnosc = document.getElementById("niezgodnosc")
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

on1.addEventListener("click", ()=> {
    on1.style.display = "none"
    off1.style.display = "block"
    pwd.type = "text"
})

on2.addEventListener("click", ()=> {
    on2.style.display = "none"
    off2.style.display = "block"
    reppwd.type = "text"
})

off1.addEventListener("click", ()=> {
    off1.style.display = "none"
    on1.style.display = "block"
    pwd.type = "password"
})

off2.addEventListener("click", ()=> {
    off2.style.display = "none"
    on2.style.display = "block"
    reppwd.type = "password"
})


function zmiana(a, b){
    a.style.display = "none"
    b.style.display = "flex"
}

pwd.addEventListener("input", ()=>{
    let haslo = pwd.value
    let flag2 = false
    let flag3 = false
    let flag4 = false
    if(haslo.length>=8){
        zmiana(grey1, green1)
    }
    else{
        zmiana(green1, grey1)
    }
    if(format.test(haslo)){
        flag2 = true
    }
    for (const c of haslo){
        if(c==c.toUpperCase()){
            flag3 = true
        }
        if(c >= '0' && c<='9'){
            flag4 = true
        }

    }
    if(flag2){
        zmiana(grey2, green2)
    }
    else{
        zmiana(green2, grey2)
    }
    if(flag3){
        zmiana(grey3, green3)
    }
    else{
        zmiana(green3, grey3)
    }
    if(flag4){
        zmiana(grey4, green4)
    }
    else{
        zmiana(green4, grey4)
    }
})

reppwd.addEventListener("keypress", (event)=>{
    if(event.key == "Enter"){
        if(pwd.value == reppwd.value){
            niezgodnosc.style.display = "none"
        }
        else{
            niezgodnosc.style.display = "block"
        }
    }
})