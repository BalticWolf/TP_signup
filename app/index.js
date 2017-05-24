//const fs = require('fs');
const path = require('path');
const express = require('express');
const formulaire = require('formulaire');

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
app.post('/signup', signUpCtrl.postSignUpAction);
app.post('/login', loginCtrl.postLoginAction);

app.listen(port, () => console.log(`Vous pouvez vous connecter à 127.0.0.1:8081 `))

var form = formulaire({
    formClass : 'form',
    formId : 'formulaire_ID',
    action: '/send',
    method: 'post',
    fieldClassWrapper: 'form-group',
    fieldClass: 'form-control',
    submit: {
        type: 'link',
        class: 'btn btn-primary sender',
        href: 'javascript:void(0)',
        onclick: null,
        value: 'Enviar'
    },
    fields: {
        surname: { type: 'text', required: true},
        email: { type: 'email', required: true},
        password: { type: 'password', required: true},
    },
});

console.log(formulaire);