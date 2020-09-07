const { ref } = require("./db.controller");

const getData = (req, res) => {
    ref.once("value", (data) => {
        if (data.exists()) {
            res.json({
                status: true,
                info: data.val(),
            });
        } else {
            res.json({
                status: false,
                info: "db is empty",
            });
        }
    }).catch((err) => {
        console.log(err.message);
    });
};

module.exports = { getData };
