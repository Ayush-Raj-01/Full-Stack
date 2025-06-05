    //  Closure = They are basically functions And the whole idea behind these functions is that they remember the environment in which they created.This means that function can retain the variables which are declared outside of it.



function outer() {
    let counter = 4
    return function () {
        counter++
        return counter
    }
}

let increment = outer()
console.log(increment())
console.log(increment())
console.log(increment())
