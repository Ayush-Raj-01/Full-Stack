/*let username = {
    firstname: "Ayush" ,
    isLoggedin: true,
};*/

// By making it const the memory space is constant but values can be changed
const username = {
    firstname: "Ayush" ,
    isLoggedin: true,
};

username.firstname = "Mr. Ayush";
username.lastname = "Raj";


console.log(username.firstname);
console.log(username["lastname"]);  //another way to print 
console.log(username);
console.log(typeof username);


let today = new Date();
console.log(today);
console.log(today.getDate());

// Arrays

let anotherUser = ["Ayush", true];

console.log(anotherUser[0]);

console.log("1" + 2 );

let isValaue = "2";
console.log(Number(isValaue));
console.log(typeof Number(isValaue));
console.log(Number(null));
console.log(Number(undefined));  // NaN -> Not a Number