class UserController {
    
    constructor(path){
        this._path=path;
    }

    postProfileAction(req, res) {
        console.log('User page');
    }
    
    postProfileAction(req, res) {
    // données récupérées du post
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let domaine = req.body.domaine;

    // concaténation des données
    let user = firstname +","+ lastname +","+ domaine +"\n"

    res.render('profileAction');
    }
}
module.exports = UserController;
