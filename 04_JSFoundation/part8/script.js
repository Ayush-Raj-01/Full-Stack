// example - 1

document.getElementById('changeTextButton').addEventListener("click" , function () {
    let para = document.getElementById('myParagraph')
    para.textContent = "THE PARAGRAPH IS CHANGED"
})


// example - 2

document.getElementById("highlightFirstCity").addEventListener("click" , function () {
    let citiesList = document.getElementById("citiesList")
    citiesList.firstElementChild.classList.add("highlight")
})

// example - 3

document.getElementById("changeOrder").addEventListener("click" , function () {
    let coffeeType =  document.getElementById("coffeeType")
    coffeeType.textContent = "Espresso"
})


// example - 4

document.getElementById("addNewItem").addEventListener("click" , function () {

    let newItem = document.createElement("li")
    newItem.textContent = "Egg"
    document.getElementById("shoppingList").append(newItem)
})


// example - 5

document.getElementById("removeLastTask").addEventListener("click" , function () {
    let taskList = document.getElementById("taskList")
    taskList.lastElementChild.remove()
})


// example - 6

document.getElementById("clickMeButton").addEventListener("click" , function () {
    alert("DOM Example")
})