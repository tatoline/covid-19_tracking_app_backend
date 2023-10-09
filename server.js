// defining the server port
const port = process.env.PORT || 5000

// initializing installed dependencies
const express = require('express')
require('dotenv').config()
const axios = require('axios')
const app = express()
const cors = require('cors')
app.use(cors({
    origin: 'https://covid.taylanmiroglu.com'
}))

// listening for port 5000
app.listen(5000, ()=> console.log(`Server is running on ${port}` ))

// API request for Country statistics
app.get('/corona/country', (req,res)=>{    
    const options = {
        method: 'GET',
        url: 'https://api.collectapi.com/corona/countriesData',
        headers: {
            'authorization': process.env.API_KEY,
        }
   }

    axios.request(options).then(function (response) {
        res.json(response.data)
    }).catch(function (error) {
        console.error(error)
    })
})

// API request for Country statistics
app.get('/corona/world', (req,res)=>{    
    const options = {
        method: 'GET',
        url: 'https://api.collectapi.com/corona/totalData',
        headers: {
            'authorization': process.env.API_KEY,
        }
   }
   
    axios.request(options).then(function (response) {
        res.json(response.data)
    }).catch(function (error) {
        console.error(error)
    })
})

// API request for Country statistics
app.get('/corona/continent', (req,res)=>{    
    const options = {
        method: 'GET',
        url: 'https://api.collectapi.com/corona/continentData',
        headers: {
            'authorization': process.env.API_KEY,
        }
   }
   
    axios.request(options).then(function (response) {
        res.json(response.data)
    }).catch(function (error) {
        console.error(error)
    })
})