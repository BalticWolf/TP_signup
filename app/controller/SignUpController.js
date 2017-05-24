class SignUpController {
    getSignUpAction(req, res) {
        res.render('signAction');
    }

    postSignUpAction(req, res) {
	    let name = req.body.name;
	  	let email = req.body.email;
	  	let password = req.body.password;
	  	let confirmPassword = req.body.confirmPassword;
	 	console.log("valeurs= " +name+ " " +email+ " " +password+ " " +confirmPassword);
        res.render('loginAction');
    }
}

module.exports = SignUpController;