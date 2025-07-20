// backend utility function for api calling 
import axios from "axios"; 
import 'dotenv/config'; 




const baseUrl = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/'
const apiKey = process.env.API_KEY 


async function getMeaning( word ) {  

    const apiUrl = baseUrl + word + '?key=' + apiKey; 

    // Learning 
    // The concatenation operator by itself unpacks an array 
    // I have added the unpacking where it was needed, but it was( /will ) working without that as well 
    // Unsure about multiple words though 


    try { 
        
        const result = await axios.get( apiUrl ); 

        if ( result.status === 200 ) { 

            return result.data; 
        }
        else { 

            return 'Error Occured'; 
        }
    }
    catch ( error ) { 

        console.log( error )
    }
} 


async function getRandomWord() {

    try { 

        const result = await axios.get( 'https://random-word-api.herokuapp.com/word' ) 

        return result.data; 
    }
    catch ( error ) { 

        console.log( error ); 
    }
} 


export { getMeaning, getRandomWord }























