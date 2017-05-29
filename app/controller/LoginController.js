class LoginController {
    constructor(path, fs) {
        this._path = path;
        this._fs = fs;
    }

    getLoginAction(req, res) {
        res.render('loginAction');
    }

    postLoginAction(req, res) {
        // données récupérées du post
        let email = req.body.email;
        let password = req.body.password;

        // lecture des données du fichier user.csv
        const csvFile = this._path.join('data', 'user.csv');

        const content = this._fs.readFile(csvFile, 'utf8', (err) => {
            if (err) throw err;
            console.log('The file has been found!');
        });

        const users = content.split("\n");

        // boucler sur le tableau users
        // vérifier si l'utilisateur est dans le tableau
        // si présent :
            res.render('profileAction');
            //return
        // Si pas trouvé :
            // afficher 'utilisateur inconnu'
    }
}

module.exports = LoginController;