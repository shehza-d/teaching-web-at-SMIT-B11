import express from 'express'
// import { products } from './productData.mjs'
import cors from 'cors'


const app = express()
const port = process.env.PORT || 3000
const products = []

app.use(cors())
app.use(express.json())

app.get('/', (req, response) => {
    response.send(`Hello World 2`)
})

app.get('/products', (request, response) => {

    response.send(products)
})

app.post('/product', (request, response) => {
    console.log("request ki body: ", request.body);

    const product = request.body

    products.push(product)

    response.send("product added successfully!")
})
// app.get('/product', (request, response) => {
//     console.log('request ', request);

//     // response.send({ name: 'Lemon', price: 150, quantity: '1kg' })

//     response.send(products)
// })

app.use((request, response) => {
    response.send("no route found!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
