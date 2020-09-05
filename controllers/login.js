const { firebase } = require("./dbController");

const logIn = (req, res) => {
    let { email, password } = req.body;

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
            res.json({
                info: "el usuario fue logeado correctamente",
                usersID: firebase.auth().currentUser.uid,
            });
        })
        .catch((err) => {
            console.log(err);
            res.send("hubo un problema con su solicitud");
        });
};

const signedIn = (req, res, next) => {
    let usuario = req.body;

    firebase.auth().onAuthStateChanged(function (usuario) {
        console.log(usuario === null);
        next("hay que logearse");
    });
    next();
};

const logOut = (req, res) => {
    firebase
        .auth()
        .signOut()
        .then(function () {
            res.send("Gracias vuelva prontos");
        })
        .catch(function (error) {
            res.send("hubo un problema con su solicitud");
        });
};

module.exports = { logIn, signedIn, logOut };
