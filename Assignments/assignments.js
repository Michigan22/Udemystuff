//Function declaration
function percentageOfWorld(population) {
    return population / 7900 * 100;
}

console.log(percentageOfWorld(330));
console.log(percentageOfWorld(33));
console.log(percentageOfWorld(1600));

const percentPopulation = function(population) {
    return population / 7900 * 100;
}
console.log(percentPopulation(330));

//Arrow Function
const calcPercentage = population => population / 7900 * 100;
console.log(calcPercentage(87));

//Functions calling other functions
function describePopulation(country, population) {
    let percent = percentageOfWorld(population);
    let description = `${country} has ${population} million people, which is ${population / 7900 * 100}% of the world population.`;
    console.log(description);
}

describePopulation('China', 330);