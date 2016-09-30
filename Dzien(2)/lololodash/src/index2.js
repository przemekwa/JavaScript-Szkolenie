console.log("Hello form index2");

const qwest = require('qwest');
const external = require('./eternal')

const apiUrl = "http://jsonplaceholder.typicode.com/users";

qwest.get(apiUrl)
    .then((xhr,response)=> {
        console.log(response);
});


