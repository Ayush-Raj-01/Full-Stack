function fetchUserData() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve({name: "Raj" , URL: "https://google.com"})
        }, 3000)
    })
}


async function getUserData() {
    try {
        console.log("Fetching user data....")
        const userData = await fetchUserData()           // we can only use await keyword when we have an async over the function.
        console.log("User data fetched successfully")
        console.log("User data: ", userData)
    } catch (error) {
        console.log("Error fetching data", error)
    }
}

getUserData()