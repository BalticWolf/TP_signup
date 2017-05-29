class UserController {
    
    constructor(path){
        this._path=path;
    }

    listEmailAction(req, res) {
        // données récupérées du post
        let firstname = req.body.firstname.toLowerCase();
        let lastname = req.body.lastname.toLowerCase();
        let domain = req.body.domain.toLowerCase();

        const symbols = ['.', '-', '_'];

        const listMailsFirstnameLastname = symbols.map(symbol => `${firstname}${symbol}${lastname}@${domain}`);
        const listMailsLastnameFirstname = symbols.map(symbol => `${lastname}${symbol}${firstname}@${domain}`);
        const listMailsLFirstname = symbols.map(symbol => `${lastname.substring(0, 1)}${symbol}${firstname}@${domain}`);
        const listMails = [...listMailsFirstnameLastname, ...listMailsLastnameFirstname, ...listMailsLFirstname];

        console.log(listMails);
        res.render('userTableAction', {
            fName: firstname,
            lName: lastname,
            domain: domain,
            mails: listMails
        });
    }
}
module.exports = UserController;
