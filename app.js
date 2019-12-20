//Definerar 1:a knappen
const btn1 = document.querySelector(".btn1");


// Denhär funktionen räknar ut kostander 
function visaKostnad(e) {
    e.preventDefault();

    const input1 = document.querySelector(".input1").value;
    const kostnad = document.querySelector(".kostnadDiv");

    kostnad.innerHTML= "<li>" + input1 + "</li>";
    
    const kostnadTotalt = document.querySelector(".kostnadTotDiv");

    kostnadTotalt.innerHTML = (Number(kostnadTotalt.innerHTML)) + (Number(input1));

    const resultat = document.querySelector(".resultat-div");
    resultat.innerHTML = (Number(kostnadTotalt.innerHTML)) - (Number(inkomstTotalt.innerHTML));
}

//Här aktiveras funktionen som räknar ut kostander, funktionen aktiveras alltså genom att klicka på knappen(btn1)
btn1.addEventListener("click", visaKostnad);

console.log(visaKostnad)


const btn2 = document.querySelector(".btn2");

// Denhär funktionen räknar ut Inkomster
function visaInkomst(e) {
    e.preventDefault();

    const input2 = document.querySelector(".input2").value;
    const inkomst = document.querySelector(".inkomstDiv");

    inkomst.innerHTML = "<li>" + input2 + "</li>"; 

    const inkomstTotalt = document.querySelector(".inkomstTotDiv");

    inkomstTotalt.innerHTML = (Number(inkomstTotalt.innerHTML)) + (Number(input2));

    const resultat = document.querySelector(".resultat-div");
    resultat.innerHTML = (Number(inkomstTotalt.innerHTML)) - (Number(kostnadTotalt.innerHTML));
}

//Här aktiveras funktionen som räknar ut inkomster, funktionen aktiveras alltså genom att klicka på knappen(btn2)
btn2.addEventListener("click", visaInkomst);

// Här skapas variablar för de olika divarna som ska användas för att att skriva ut resultaten.
const resultat = document.querySelector(".resultat-div");
const kostnadTotalt = document.querySelector(".kostnadTotDiv");
const inkomstTotalt = document.querySelector(".inkomstTotDiv");

//Här räknas sedan slutresultatet av budgeten
resultat.innerHTML = (Number(inkomstTotalt.innerHTML)) - (Number(kostnadTotalt.innerHTML));