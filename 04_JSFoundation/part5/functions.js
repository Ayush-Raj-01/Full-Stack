/*
1. Write a funnction named 'makeTea' that takes one parameter, 'typeOfTea', and returns a string like '"Making green tea"' when called with '"green tea"' . 
    store the result in a variable named 'teaOrder'
*/

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
    console.log(test);
}
let teaOrder = makeTea("Lemon tea");
console.log(teaOrder)

/*
2. Creat a function named 'orderTea' that takes one parameter, 'teaType' . Inside this function, create another function named 'confirmOrder' that returns a message like '"Order confirmed for chai"'.
Call'confirmOrder' from within 'orderTea' and return the result.
*/

function orderTea(teaType){
    function confirmOrder(){
        return 'order confirmed for chai'
    }
    return confirmOrder()
}

let orderConfirmation = orderTea("CHAI")
console.log(orderConfirmation)

/*
3. Write an arrow function named 'catcutateTotal' that takes two parameters: 'price' and 'quantity'. The function should return the totat cost by muttiptying the 'price' and 'quantity' . 
Store the result in a variable named 'totatCost'.
*/

// const catcutateTotal = (price , quantity) => {
//     return price * quantity
// }
// we can write the same in this way also but by removing brackets and return and bu writing things in one line 
const catcutateTotal = (price , quantity) => price * quantity

let totatCost = catcutateTotal(499 , 100)
console.log(totatCost)

/*
4. Write a function named 'processTeaOrder' that takes another functon , 'makeTea',  as a parameter and calls it with the argument '"rarl grey"'.
Return the result of caling 'makeTea'
*/

function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`
}

function processTeaOrder(teaFunction){
    return teaFunction("earlgrey")
}


let order = processTeaOrder (makeTea)
    console.log(order);
    
/*
5. Write a function named 'createTeaMaker' that returns another function. The returned function should take one parameter, 'teaType', and return a message like '"Making green tea"'
Store the returned function in a variable named 'teaMaker' and call it with '"green tea"'
*/

function createTeaMaker(){
    return function(teaType){
        return `Made ${teaType}`
    }
}

let teaMaker = createTeaMaker()
let result = teaMaker("green tea")
console.log(result)