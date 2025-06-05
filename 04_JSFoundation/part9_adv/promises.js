        //  Promises = it is a utility being provided in JavaScript, and you know that some of these

        // Promise takes a callback, which actually takes two parameters resolve and reject.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true
            if (success) {
                resolve("Data fetched successfully")
            }
            else{
                reject("Error fetching data")
            }
        }, 3000)
    })
}

fetchData()
    .then((data) => console.log(data))       // anything that is being sent via the resolve is being catch up by the then 
    .catch((error) => console.log(error))       // Anything that is being sent via the reject is being catch up by the catch


// we can use in this way also
fetchData()
    .then((data) => {
        console.log(data)
        return data.toUpperCase()
    })
    .then((value) => {
        console.log(value)
    })
    .catch((error) => console.error(error))