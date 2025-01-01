import express from 'express'

const app = express()
const port = 5001

const todos = []

app.use(express.json())


app.get('/get-all-todos', (request, response) => {
    response.send(todos)
})

// naya todo bannae ko
app.post('/add-todo', (request, response) => {

    todos.push(request.body.todo)

    response.send("todo add hogya hy")
})

// ye todo ko update ya edit karne ki api ki
app.patch('/edit-todo/:id', (request, response) => { })


app.delete('/delete-todo/:id', (request, response) => { })

// 


app.use((request, response) => {
    response.status(404).send("no route found!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// const a = [{
//     id: 2,
//     todo: "assignemnt karna hy",
//     createdAt: "1:15",
//     todoAddBy: "shehzad"
// },
// {
//     id: 3,
//     todo: "time per class ma aane ky liye jaldi soona hy",
//     createdAt: "1:17",
//     todoAddBy: "junaid bhai"
// }]