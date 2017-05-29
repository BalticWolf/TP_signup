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

        const content = this._fs.readFileSync(csvFile, 'utf8', (err) => {
            if (err) throw err;
            console.log('The file has been found!');
        });

        let users = content.split("\n");

        // boucler sur le tableau users
        users.forEach(item => {
            console.log(item);
            const user = item.split(',');

            if (user[1] === email && user[2] === password) {
                res.render('profileAction');
                return;
            }
        });
        console.log('utilisateur inconnu');
    }
}

module.exports = LoginController;