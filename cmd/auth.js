const passport = require('passport');
var sqlite3 = require('sqlite3');
const session = require("express-session");

const sessionStore = new sqlite3.Database('./db/passport_with_google.sqlite3');

const init_session_store = () => {
    session({
        secret: process.env.SESSION_SECRET,
        store: sessionStore,
        resave: false,
        saveUninitialized: false
    });
}

function index_handler(req, res) {
    if (req.user) {
        res.json('안녕하세요!');
    } else {
        res.json('로그인 하세요!');
    }
}
// function register_handler(req, res) {}
// function login_handler(req, res) {}
function logout_handler(req, res) {}


module.exports = {
    init_session_store,
    index_handler,
    logout_handler
};