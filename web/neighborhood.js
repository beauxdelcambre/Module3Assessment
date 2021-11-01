const resturants = ["Stacy's", "Market Eatz", "Texas Roadhouse", "Half Shell Oyster House", "Agave Mexican Grill & Cantina", "Saltgrass Steakhouse", "Buffalo Wild Wings"];


const randomResturants = document.querySelector("");

function randoRest(){
    random = Math.floor(Math.random() * resturants.length);
    alert(random)
}
randomResturants.addEventListener("click", randoRest);

console.log(random, resturants[random]);