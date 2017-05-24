//const fs = require('fs');
const path = require('path');
const express = require('express');
var bodyParser = require("body-parser");

const SignUpController = require('./controller/SignUpController');
const LoginController = require('./controller/LoginController');

// Serveur
const port = process.argv[2] || 3000;
const app = express();

// Module de parsing
app.use(bodyParser.urlencoded({ extended: true }));

const signUpCtrl = new SignUpController();
const loginCtrl = new LoginController();

// Définition de l'emplacement des templates de génération de vues
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/../view'));

// Définition du mapping
app.get('/', signUpCtrl.getSignUpAction);
//app.post('/login', loginCtrl.postLoginAction);

// Confirmer le démarrage du serveur
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Récupération des données post
app.post('/', signUpCtrl.postSignUpAction);