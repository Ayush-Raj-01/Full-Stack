let computer = { cpu: 12 }
let lenevo = {
    screen: "HD",
    __proto__: computer          // '__proto__' is used to link it to the computer(now lenevo will be able to acces all the property of computer )
    }   
let tomHardware = {}

console.log('lenevo', lenevo.__proto__ )




let genericCar = { tyres: 4 }
let tesla = {
    driver: "AI"
}

Object.setPrototypeOf( tesla , genericCar )     // we ecan also use '.setPrototypeOf( will acces , will be accesed )' instead of '__proto__' 

console.log('Tesla' , Object.getPrototypeOf(tesla))   