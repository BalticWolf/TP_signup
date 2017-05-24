//const fs = require('fs');
const path = require('path');
const express = require('express');

const SignUpController = require('./controller/SignUpController');
const LoginController = require('./controller/LoginController');
const UserController = require ('./controller/UserController');
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


/*fs.open(configPathFile, 'r', (err, fd) => {
    if (err) {
        if(err.code !== 'ENOENT') { }
        } else {
        console.log("Je supprime");
        fs.unlinkSync(configPathFile);
        }



        console.log("Je crée");
        fs.readFile(sampleConfigPathFile, 'utf8', (err, contentSampleFile) => {
            if (err) throw err;
            // First
            // contentSampleFile = contentSampleFile.replace("PORT", args.port)
            //     .replace("HOST", args.host)
            //     .replace("PROTOCOL", args.protocol);
            // console.log(contentSampleFile);

            // Second
            // const objConfig = JSON.parse(contentSampleFile);
            //
            // objConfig.port = args.port;
            // objConfig.host = args.host;
            // objConfig.protocol = args.protocol;
            //
            // console.log(JSON.stringify(objConfig));

            // Par tableau associatif ["port", "host", "protocol"]
        Object.keys(args).forEach(key => {
            contentSampleFile = contentSampleFile.replace(key.toUpperCase(), args[key])
        });

        fs.writeFile(configPathFile, contentSampleFile, 'utf8', (err) => {
            if (err) throw err;

        console.log("Le fichier de configuration est créé.");
        });
    });
});*/
