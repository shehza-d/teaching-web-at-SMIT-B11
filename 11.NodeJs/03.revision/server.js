import express from 'express'

const app = express()
const port = 5001

app.get('/', (request, response) => {
    // overwrite nhi hota phale wala phale jata hy
    // response.send('<h1>Hello World 2!</h1>')

    // ak bar hi response jata hy 
    response.send('<h1>Hello Noman!</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})