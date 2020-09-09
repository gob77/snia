const express = require("express");
const app = express();
const { getData } = require("./controllers/getData.controller");
const { createData, searchData } = require("./controllers/createData.controller");
const { deleteData } = require("./controllers/deleteData.controller");
const { updateData } = require("./controllers/updateData.controller");
const { logIn, signedIn, logOut } = require("./controllers/login.controller");

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT || port, () => {
    console.log(`serving in http://localhost:${port}`);
});

app.get("/main", getData, (req, res) => {});

app.post("/nuevoproducto", signedIn, createData, (req, res) => {});

app.post("/login", logIn, (req, res) => {});

app.post("/logout", logOut, (req, res) => {});

app.post("/signedin", signedIn, (req, res) => {});
