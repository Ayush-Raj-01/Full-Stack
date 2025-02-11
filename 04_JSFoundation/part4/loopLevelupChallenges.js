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

