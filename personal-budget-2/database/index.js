require('dotenv').config()

const { Pool } = require('pg')

const config = {
    connectionString : `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
    ssl: false,
}

 const db = new Pool(config)

module.exports = {db}