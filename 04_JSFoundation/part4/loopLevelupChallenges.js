/*
1. write a 'for' loop that loops through the array '["green tea", "black tea", "chai", "oolong tea"]' and stops the loop when it finds '"chai"'.
    store all teas before 'chai' in a new array named 'selectedTea'.
*/

let selectedTea =[]
let tea = ["green tea", "black tea", "chai", "oolong tea"]
for (let i = 0; i < tea.length; i++) {
    if (tea[i] === "chai"){
        break;
    } 
    selectedTea.push(tea[i])
}
console.log(selectedTea)

/*
2. write a 'for' loop that loops through the array '["london", "New York", "Paris", "Berlin"]' and skips "Paris"
    store the other cities in a new array named 'visitedCities'.
*/

let cities = ["london", "New York", "Paris", "Berlin"]
let visitedCities = []
for (let i = 0; i < cities.length; i++) {
    if (cities[i] === "Paris") {
        continue;
    }
    visitedCities.push(cities[i]) 
}
console.log(visitedCities)

/*
3. use a 'for-of' loop to iterate through the array '[1,2,3,4,5]' and stop when the number '4' is found . 
    store the numbers before '4' in an array named 'smallNumbers'.
*/

let numbers = [1,2,3,4,5]
let smallNumbers = []

for (const num of numbers) {
    if (num === '4') {
        break
    }
    smallNumbers.push(num)
}
console.log(smallNumbers)

/*
4. use a 'for-of' loop to iterate throuh the array '["green tea", "black tea", "herbal tea", "oolong tea"]' and skip '"herbal tea"'.
    store the other teas in an array named 'preferredTeas'
*/

let teas = ["green tea", "black tea", "herbal tea", "oolong tea"]
let preferredTeas = []

for (const element of teas) {
    if (element === "herbal tea") {
        continue
    }
    preferredTeas.push(element)
}
console.log(preferredTeas)

/*
5. use a 'for-in' loop to loop through an object containing city populations.
    stop the loop when the population of '"Berlin"' is found and store all previous cities' populations in a new object named 'cityNewPopulations'.

            let citiesPopulation = {
                "London": 8900000,
                "New York": 8400000,
                "Paris": 2200000,
                "Berlin": 3500000
            }
*/

let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
}

let cityNewPopulations = {}

for (const city in citiesPopulation) {
    if(city == "Berlin"){
        break;
    }
    // key = value
    cityNewPopulations[city] = citiesPopulation[city]
}
console.log(cityNewPopulations)

/*
6. Use a 'for-in' loop to loop through an object contning cit populations.
    skip any citywith a ppulation  below 3 million and store the rest in a new object named 'largeCities'.

        let worldCities = {
                "Sydney": 5000000,
                "Tokyo": 9000000,
                "Berlin": 3500000,
                "Paris": 2200000
        }
*/

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
}
let largeCities = {}

for (const city in worldCities) {
    if(worldCities[city] < 3000000){
        continue;
    }
    largeCities[city] = worldCities[city]
}
console.log(largeCities)

/*
7. Write a 'foreach' loop that iterates through the array '["earl grey" , "green tea" , "chai" , "oolong tea"]' .
    stop the loop when '"chai"' is found , and store all previous tea types in an array named 'availableTeas'.
*/

let teaCollection = ["earl grey" , "green tea" , "chai" , "oolong tea"]
let availableTeas = []

