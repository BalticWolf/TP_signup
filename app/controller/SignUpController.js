class SignUpController {
    constructor(path, fs){
        this._path=path;
        this._fs = fs;
    }

    getSignUpAction(req, res) {
        res.render('signAction');
    }
    getLoginAction(req, res) {
        res.render('loginAction');
    }
    postSignUpAction(req, res) {
      // données récupérées du post
      let name = req.body.name;
      let email = req.body.email;
      let password = req.body.password;
      let confirmPassword = req.body.confirmPassword;
      
      // vérification de la validité du mot de passe

      if(password === confirmPassword) {

      // concaténation des données
	  	let user = name +","+ email +","+ password +"\n";
	 		 	
	  	// écriture des données dans un fichier user.csv
	  	const csvFile = this._path.join('data', 'user.csv');

        this._fs.appendFile(csvFile, user, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
      
        res.render('loginAction');
      }
      else {
        res.render('failSignAction', {user: name, email: email});
      }
    }
}

module.exports = SignUpController;
