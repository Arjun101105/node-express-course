const express = require('express')
const app = express()

let {people} = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended: false}))


app.get('/api/people', (req, res)=>{
    res.status(200).json({success:true,data:people})
})

app.post('/login', (req, res)=>{
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send(`Please provide credentials`)
    res.send('POST')
})

app.put('api/people/:id', (req,res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
        return res.status(404).json({success: false, msg:`No perosn found with the following ID: ${id}`})
    }
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(404).json({success:true, data:newPeople})
})

app.listen(5000,()=>{
    console.log(`server is listening on port 5000...`);
    
})