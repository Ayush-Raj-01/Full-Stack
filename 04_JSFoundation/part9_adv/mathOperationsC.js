// there are two types of export one is Module and other one is Common 

// this is commmon js

function add(a, b){
    return a + b
}


function subtract(a, b){
    return a - b
}


function multiply(a, b){
    return a * b
}


module.exports = {
    add,
    subtract,
    multiply
}


            //  CONTINUE IN "appC.js"