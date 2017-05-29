const fs = require('fs');
const path = require('path');
const express = require('express');
var bodyParser = require("body-parser");

const SignUpController = require('./controller/SignUpController');
const LoginController = require('./controller/LoginController');

const UserController = require ('./controller/UserController');

// Serveur
const port = process.argv[2] || 3000;
const app = express();

// Module de parsing
app.use(bodyParser.urlencoded({ extended: true }));

const signUpCtrl = new SignUpController(path, fs);
const loginCtrl = new LoginController(path, fs);
const userCtrl = new UserController(path);


// Définition de l'emplacement des templates de génération de vues
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/../view'));

// Définition du mapping
app.get('/', signUpCtrl.getSignUpAction);
app.get('/login', signUpCtrl.getLoginAction.bind(signUpCtrl));

app.use('/login', signUpCtrl.postSignUpAction.bind(signUpCtrl));
app.use('/profile', loginCtrl.postLoginAction.bind(loginCtrl));
app.use('/profileEmail', userCtrl.listEmailAction.bind(userCtrl));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
