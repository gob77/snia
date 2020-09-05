const firebase = require("firebase");

let config = {
    apiKey: "AIzaSyAUjfb3kU6XqSyCx5l7_dMIS90sO3gxlgE",
    authDomain: "soniadb1518.firebaseapp.com",
    databaseURL: "https://soniadb1518.firebaseio.com",
    projectId: "soniadb1518",
    storageBucket: "soniadb1518.appspot.com",
    messagingSenderId: "463219674443",
    appId: "1:463219674443:web:d22a98942e074104",
};

firebase.initializeApp(config);

const db = firebase.database();
const ref = db.ref("productos");

module.exports = { ref, db, firebase };
