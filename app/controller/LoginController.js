class LoginController {
    postLoginAction(req, res) {
        //console.log('Login page');
        res.render('loginAction');
    }
}

module.exports = LoginController;