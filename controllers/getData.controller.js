const { db } = require("./db.controller");

const getData = (req, res) => {
    /* db.once("value", (data) => {
        if (data.exists()) {
            res.json({
                status: true,
                info: [data.val()],
            });
        } else {
            res.json({
                status: false,
                info: "db is empty",
            });
        }
    }).catch((err) => {
        console.log(err.message);
    }); */

    res.json({
        status: "success",
    });
};

module.exports = { getData };
