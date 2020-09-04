const express = require("express");
const app = express();
const { getData } = require("./controllers/getData.controller");

const port = 3000;

app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT || port, () => {
    console.log(`Listening port: ${port}`);
});

app.get("/main", getData, (req, res) => {
    res.json({
        status: "success",
    });
});
