const knex = require('knex')({
    "client": "mysql",
    "connection": {
        "user": "admin",
        "password": "admin_pass",
        "databse": "bakery",
        "host": "127.0.0.1"
    }
});

const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
