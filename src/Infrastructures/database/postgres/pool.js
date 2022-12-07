/* istanbul ignore file */

const { Pool } = require('pg');

const testConfig = {
    host: proccess.env.PGHOST_TEST,
    port: proccess.env.PGPORT_TEST,
    user: proccess.env.PGUSER_TEST,
    password: proccess.env.PGPASSWORD_TEST,
    database: proccess.env.PGDATABASE_TEST,
};

const pool = process.env.NODE_ENV === 'test' ? new Pool(testConfig) : new Pool();

module.exports = pool