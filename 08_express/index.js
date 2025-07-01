import 'dotenv/config'
import express from 'express'

const app = express()

const port = process.env.PORT || 3000
app.use(express.json())

let carData = []
let nextId = 1

// add a new car
app.post('/cars', (req, res) => {
    const {name, price} = req.body
    const newCar = {id: nextId++ , name , price}
    carData.push(newCar)
    res.status(201).send(newCar)
})

// get all cars
app.get('/cars' , (req , res) => {
    res.status(200).send(carData)
})

// get a cars with id
app.get('/cars/:id' , (req , res) => {
    const car = carData.find(c => c.id === parseInt(req.params.id))
    if(!car) {
        return res.status(404).send('Car not found')
    }
    res.status(200).send(car)
})

// updates car

app.put('/cars/:id', (req, res) => {
    const car = carData.find(c => c.id === parseInt(req.params.id))

    if(!car) {
        return res.status(404).send('Car not found')
    }
    const {name , price} = req.body
    car.name = name
    car.price = price
    res.status(200).send(car)
})

// delete car

app.delete('/cars/:id', (req, res) => {
    const index = carData.findIndex(c => c.id === parseInt(req.params.id))
    if(index  === -1){
        return res.status(404).send('Car not found')
    }
    carData.splice(index , 1)
    return res.status(204).send('deleted')
})

app.listen(port , () => {
    console.log(`Server is running at port: ${port}...`)
})