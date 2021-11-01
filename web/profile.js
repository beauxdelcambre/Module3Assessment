const favColorAlert = document.querySelector("#color");

function favColor(){
    alert("My favorite color is blue");
}
favColorAlert.addEventListener("click", favColor);

const favPlaceAlert = document.querySelector("#place");

function favPlace(){
    alert("My favorite place is the beach");
}
favPlaceAlert.addEventListener("click", favPlace);

const favRitualAlert = document.querySelector("#ritual");

function favRitual(){
    alert("My favorite ritual is morning coffee");
}
favRitualAlert.addEventListener("click", favRitual);
