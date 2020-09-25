const express = require("express");

const app = express();

const port = 3000;

app.get('/', (req, res) => res.send('Hello WOrld'))
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

const admin = (req, res) => {
    res.send("This is the admin dashboard");
}

const isAdmin = (req, res, next) => {
    console.log('isAdmin is running');
    next();
}

const isLoggedIn = (req, res, next) => {
    console.log('isLoggedIn is running');
    next();
}

app.get('/admin', isLoggedIn, isAdmin, admin);