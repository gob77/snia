const { ref } = require("./db.controller");

const deleteData = (req, res, user) => {
    if (user) {
        res.send("tiene que estar logeado para realizar esta accion");
    }
    let key = req.body.item;

    ref.child(key).remove();
    res.send("el elemento a sido borrado");
};

module.exports = { deleteData };
