const express = require('express');
const app = express();

const path = require('path');

function pet(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
}

const data = new pet(
    "Infante",
    20,
    "Horse");

app.use('/images', express.static('images'));

app.get('/', (req, res) => {
    res.sendFile(path.join( __dirname + '/hello.html'))
    });
                     
                     
app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname + '/info.html'))
    });

app.get('/pictures', (req, res) => {
    res.sendFile(path.join(__dirname + '/pictures.html'))
    });
                         
app.get('/data', (req, res) => {
   res.json(data);
});

app.listen(process.env.PORT || 8080)

