class SignUpController {
    getSignUpAction(req, res) {
        //console.log('Sign-up page');
        res.render('signAction');
    }
}

module.exports = SignUpController;