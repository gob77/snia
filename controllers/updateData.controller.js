const { ref } = require("./dbController");

const updateData = (req, res) => {
    let { key, precio, stock } = req.body;

    let data = {
        precio,
        stock,
    };

    ref.child(key).update(data);
    res.send("el elemento a sido actualizado");
};

module.exports = { updateData };
