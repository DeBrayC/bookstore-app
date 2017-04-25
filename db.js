const pg = require('pg')
const connectionString = process.env.database || 'postgres:localhost:5432/books'

const client = new pg.Client(connectionString)
client.connect()
const query = client.query(
  'CREATE TABLE IF NOT EXISTS items(id SERIAL PRIMARY KEY, title VARCHAR(40) not null, author VARCHAR(40) not null, genre VARCHAR(40), decription VARCHAR(255))');
query.on('end', () => { client.end(); })
