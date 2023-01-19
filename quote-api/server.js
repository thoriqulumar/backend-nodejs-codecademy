const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) =>{
    randomQuote = getRandomElement(quotes)
    res.send(randomQuote)
})

app.get('/api/quotes', (req, res, next) =>{
    person = req.query.person;
    arrayByPerson = quotes.filter((quote) => quote.person == person )
    res.send(arrayByPerson)
})

app.post('/api/quotes', (req, res, next) =>{
    person = req.query.person;
    quote = req.query.quote;
    if(typeof person === 'string' && typeof quote === 'string'){
        newQuote = {
            quote,
            person,
        }
        res.send(newQuote)
    }else{
        res.status(400).send()
    }
    
})



app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`)
})