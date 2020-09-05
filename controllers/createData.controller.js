const { ref } = require("./dbController");

const searchData = (req, res, next) => {
    let item = req.body.item;
    ref.orderByChild("item")
        .equalTo(`${item}`)
        .once("value", (data) => {
            if (data.exists()) {
                res.status(409);
                res.send("el item ya existe");
                return;
            }
            next();
        });
};

const createData = (req, res) => {
    const { producto, item, precio, stock } = req.body;

    let datos = {
        producto,
        item,
        precio,
        stock,
    };

    ref.push(datos).then((data) => {
        res.send(`${data.key}`);
    });
};

module.exports = { createData, searchData };
