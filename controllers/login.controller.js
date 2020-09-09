const { firebase } = require("./db.controller");

const logIn = (req, res) => {
    console.log(req.body);
    let { email, password } = req.body;
    console.log(password);

    try {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
                /* res.json({
                    info: "el usuario fue logeado correctamente",
                    usersID: firebase.auth().currentUser,
                }); */
            });
    } catch (error) {
        console.log(error);
    }
};

const signedIn = (req, res, next) => {
    let usuario = req.body;

    firebase.auth().onAuthStateChanged(function (usuario) {
        console.log(usuario === null);

        if (usuario) {
            next();
        } else {
            res.status(403);
            res.json({
                info: "Ud no tiene los permisos requeridos",
            });
        }
    });
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
