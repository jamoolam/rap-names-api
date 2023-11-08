const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const rappers = {
    '21 savage': {
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
        'age': 29
    },
    'chance the rapper': {
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois',
        'age': 29
    },
    'unknown': {
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'age': 0
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    //request.params.name is anything that comes after the /
    let rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
    response.json(rappers)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}, better go catch it!`)
})