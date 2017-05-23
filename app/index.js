//const fs = require('fs');
const path = require('path');
const express = require('express');

const SignUpController = require('./controller/SignUpController');
const LoginController = require('./controller/LoginController');

const port = process.argv[2] || 3000;
const app = express();

const signUpCtrl = new SignUpController();
const loginCtrl = new LoginController();

// Définition de l'emplacement des templates de génération de vues
app.set('view engine', 'pug');
app.set('view', path.join(__dirname, '/../view'));

// Définition du mapping
app.get('/', signUpCtrl.postSignUpAction);
//app.post('/login', loginCtrl.postLoginAction);

// Confirmer le démarrage du serveur
app.listen(port, () => console.log(`Example app listening on port ${port}!`));