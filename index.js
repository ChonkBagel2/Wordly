import bodyParser from "body-parser";
import express from "express"; 
import 'dotenv/config'; 
import { getMeaning, getRandomWord } from './api.js'; 




const app = express(); 
const port = 3000; 


app.use( bodyParser.urlencoded( { extended: true } ) ); 
app.use( express.static('public') ); 




app.get('/', function ( req, response ) {
    response.send( 'Server is working' ); 
}) 


// Basic server setup done 
// To do s
// Create Backend ( for the use Public API project ) 
// We will require multiple routes 

// It will be better to create front-end first then 


app.get('/words', async function ( req, response ) { 


    response.render( 'home.ejs' ); 
}) 




app.post('/words', async function ( req, response ) { 


    let searchTerm = req.body['search']; 

    // handle trimming of the search term here 
    searchTerm = searchTerm.trim(); 

    if ( searchTerm ) { 

        // get the meaning of the word here 

        const result = await getMeaning( searchTerm ); 

        console.log( result[ 0 ].shortdef ); 

        response.render( 'home.ejs', {
            content: true,
            word: searchTerm, 
            meanings: result[ 0 ].shortdef 
        } ); 
    }

    
})




app.get('/words/random', async function ( req, response ) { 

    let randomWord = await getRandomWord(); 
    let randomWordMeaning = await getMeaning( randomWord[ 0 ] ); 
    
    const randomMeaning = randomWordMeaning[ 0 ]; 

    console.log( 'random word =', randomWord ); 
    console.log( 'meaning =', randomMeaning ); 

    const word = randomWord; 
    const meanings = randomMeaning.shortdef; 

    response.render( 'home.ejs', {
        content: true, 
        word: word, 
        meanings: meanings 
    })
}) 





app.listen( port, function () { 
    console.log( 'Server is working' ); 
})


























