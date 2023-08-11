const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './passport-with-google.sqlite'
});

function connection_db() {
    
}

module.exports = {
    connection_db
};