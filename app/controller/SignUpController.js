class SignUpController {
	constructor(path){
		this._path=path;
	}

    getSignUpAction(req, res) {
        res.render('signAction');
    }

    postSignUpAction(req, res) {
    	// données récupérées du post
	    let name = req.body.name;
	  	let email = req.body.email;
	  	let password = req.body.password;
	  	let confirmPassword = req.body.confirmPassword;

	  	// concaténation des données
	  	let user = name +","+ email +","+ password +","+ confirmPassword +"\n"
	 		 	
	  	// écriture des données dans un fichier user.csv
	  	const fs = require('fs');
	  	const csvFile = this._path.join('data', 'user.csv');

	 	fs.writeFile(csvFile, user, (err) => {
    	if (err) throw err;
   		console.log('The file has been saved!');
		});
    }
}

module.exports = SignUpController;