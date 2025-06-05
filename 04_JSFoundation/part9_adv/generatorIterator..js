        // Generator function doesn't execute things all at once, but it actually creates the things on the resume basis.You hit it once, it's going to generate one result, then you hit it going to generate the result again. It doesn't execute the whole thing at once.
// for generator wee have to put star 
// Instead of the return, we can use yield ihat means I will remember first time a user will come to me, I'll give him this result, another yield. second time I'll give you result that the moment you hit retun

function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
}

let gen = numberGenerator()
let genTwo = numberGenerator()

console.log(gen.next().value)          // next() = is a iterator keeps a track of the whole things which are available in the array. And it keeps on going on the next value until it hits out of the bound of the array.
console.log(gen.next().value)
console.log(gen.next().value)

console.log(gen.next().value)          // it shows "undefined" because there were only three yield


console.log(genTwo.next().value)
console.log(genTwo.next().value)

