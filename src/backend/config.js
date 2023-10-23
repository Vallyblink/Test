const SECRET_PASSWORD = process.env.SECRET_PASSWORD;

export const database = {
  user: 'postgres',
  host: 'localhost',
  database: 'TestTask',
  password: SECRET_PASSWORD,
  port: 5432,
};