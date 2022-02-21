const http = require('http')
const { loadjson } = require('./nodejson')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const fs = require("fs");
const { callbackify } = require("util");
const cors = require('cors');
app.use(cors({
    origin: "*",
}))

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => console.log("Server is runnning"));
app.get('/getjson', (req, res) => {
    res.send(loadjson())
})



// Read users.json file
fs.readFile("student.json", function (err, data) {

    // Check for errors
    if (err) throw err;

    // Converting to JSON
    const stu = JSON.parse(data);

    console.log(stu); // Print users
});



var newFlightDetails = {
    "USN": 8877,
    "NAME": "ANAGHA",
    "DEPARTMENT": "Computer Science",
    "PROGRAM": "MCA",
    "PHONE": 9874367890,
    "EMAIL": "anagharbharadwaj@gmail.com",
    
}



fs.writeFile("student1.json", JSON.stringify(newFlightDetails, null, 2), err => {
    if (err) throw err;
    console.log("File written sucessfully!");
})