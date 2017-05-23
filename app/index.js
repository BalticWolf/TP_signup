//const fs = require('fs');
const path = require('path');
const express = require('express');

const loginCtrl = require('./controller/LoginController');

const port = process.argv[2] || 3000;
const app = express();

const loginCtrl = new LoginController();

// Définition de l'emplacement des templates de génération de vues
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/../views'));

// Définition du mapping
app.post('/:signup', LoginController.postLoginAction);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));