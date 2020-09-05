const { ref } = require("./dbController");

const getData = (req, res) => {
    /* ref.once("value", (data) => {
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
        info: "success",
    });
};

module.exports = { getData };
