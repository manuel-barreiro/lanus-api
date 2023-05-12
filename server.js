const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

app.listen(process.env.PORT || PORT, () => {
    console.log('Server running on port 8000')
})

const jugadoresLanus = {
    'jose sand': {
        'age' : 42,
        'dorsal' : 9,
    },

    'lautaro acosta' : {
        'age' : 35,
        'dorsal' : 7,
    },

    'cristian lema' : {
        'age' : 37,
        'dorsal' : 2,
    },

    'brian aguirre' : {
        'age' : 21,
        'dorsal' : 27,
    },

    'jose canale' : {
        'age' : 28,
        'dorsal' : 6,
    },

    'lucas acosta' : {
        'age' : 26,
        'dorsal' : 1,
    },

    'pedro de la vega' : {
        'age' : 37,
        'dorsal' : 2,
    },

    'error' : {
        'error' : 'player not found',
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:jugadorDeLanus', (request, response) => {
    const jugadorDeLanus = request.params.jugadorDeLanus.toLowerCase()
    if(jugadoresLanus[jugadorDeLanus]){
        response.json(jugadoresLanus[jugadorDeLanus])
    }
    else {
        response.json(jugadoresLanus['error'])
    }
    
})

