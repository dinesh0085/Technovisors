const knex=require("knex")

module.exports = knex({
    client: 'mysql2', // pg, mssql, etc
 
    connection: {
        database:    'mydb',
        host:        'localhost',
        password:    'Diya@1432',
        user:        'root',
        dateStrings: true
    }
});