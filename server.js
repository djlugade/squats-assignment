const express = require('express');
const cors = require('cors')
const app = express();



const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const path = require('path');

// var port = process.env.port || 3000;
var port = 3000;

// //cross origin
app.use(cors({
    origin: 'http://localhost:4200',
}));

/* Database Connection */
const config = require('./config/db');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
mongoose.connect(config.url, options)
    .then(() => {
        console.log("Succesfully Connected", config.db);
    })
    .catch(err => console.log(err))
    /* // Database Connection */




app.use(express.static(path.join(__dirname + '/dist/')));
//app.use(express.static(path.join(__dirname + '/client/')));


//routes

const auth = require('./route/authentication');
const userlist = require('./route/getUsers');
const userPost = require('./route/userPost');


app.use('/auth', auth);
app.use('/userlist', userlist);
app.use('/userPost', userPost);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, (err) => {
    if (err) console.log(error);
    console.log("server Started", port);
});