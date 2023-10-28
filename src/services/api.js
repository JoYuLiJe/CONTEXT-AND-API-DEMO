import axios from "axios";
// let axios = require('axios');


const BASE_URL = 'https://randomuser.me/api/';

//BAD - do not hard code API keys directly into the files that use them
// const API_KEY = '234897shw34iugsb'

// instead, we use secret/private environement variables
// make sure you have ubstalled the dotenv dependancy (run 'npm install dotenv' in the terminal)
const API_KEY = process.env.REACT_APP_API_KEY;

// anytime you are making a call to an API, it needs to be done asynchronously, such as inside of an async/await function
const fetchRandomUser = async () => {
// additionally, want to make sure we use proper error handling when making API calls, so we will use try/catch
try {
    // anything in here will be ran, and if there is any error, it will run the cose in the catch block instead of stopping
    // always use await keyword on operations that might take time, eg calls to APIs
    const response = await axios.get(BASE_URL);

    // if you aren't sure what the structure of your response is(which is often the case), use console.log statements to examine it further
    // console.log(response.data.results);

    // for this API, the relevant data is inside an array inside of a results property inside of a data proprty
    return response.data.results[0]
    
} catch (error) {
// console.eror is a specific tool for logging out errors
console.error("Failed to fetch user", error);

// async functions should always have a return statement
return null;

}

}

export default fetchRandomUser;
// call function in file to text
// fetchRandomUser();