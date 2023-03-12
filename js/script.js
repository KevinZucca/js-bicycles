// create an array of objects
// each object contains proprieties of a bike which are: name and weight
// print in page the bike that's got the the lowest weight (using template literal)

const bikes = [
    {
        name: "Cannondale",
        weight: 8
    },
    {
        name: "Wilier",
        weight: 6.5
    },
    {
        name: "Trek",
        weight: 6.8
    },
    {
        name: "Phantom",
        weight: 8.2
    }
];

const bikesContainerEl = document.getElementById("bikes-container");
const bikeListEl = document.createElement("ul");
bikesContainerEl.append(bikeListEl);
bikeListEl.classList.add("bike-list");
const declaration = document.createElement("h2");
bikesContainerEl.append(declaration);


let lowestBike = bikes[0].weight;
let lightestBike;

findLowest()

const bikesList = bikes.forEach((bike)=> {
    let newBike = document.createElement("li");
    bikeListEl.append(newBike);
    newBike.textContent = `${bike.name} - ${bike.weight} kg`;
})





function findLowest() {
    for (let i = 0; i < bikes.length; i++) {
        if( bikes[i].weight < lowestBike) {
            lowestBike = bikes[i].weight;
        };
    }
    
    for (let i = 0; i < bikes.length; i++) {
        if (bikes[i].weight == lowestBike){
            lightestBike = bikes[i].name;
        }
    }
    declaration.textContent = `${lightestBike} is the most low bike with his ${lowestBike} kg`
}


