class LoginController {
    getLoginAction(req, res) {
        //console.log('Login page');
        res.render('loginAction');
    }
}

module.exports = LoginController;