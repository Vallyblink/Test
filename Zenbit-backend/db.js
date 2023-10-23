import pg from 'pg';
const { Pool } = pg;

const SECRET_PASSWORD = process.env.SECRET_PASSWORD;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'TestTask',
  password: "Iritub78",
  port: 5432,
});