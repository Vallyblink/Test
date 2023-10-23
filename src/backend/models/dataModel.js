import { SECRET_PASSWORD } from '.env';

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
    host: 'localhost',
    database: 'data',
    password: SECRET_PASSWORD,
    port: 5432,
});

pool.query('SELECT * FROM user_data', (error, result) => {
  if (error) {
    console.error('Помилка запиту:', error);
  } else {
    const data = result.rows;
    console.log('Список контактів:');
    data.forEach((user) => {
      console.log(`Ім'я: ${user.name}, Email: ${user.email}`);
    });
  }

  pool.end();
});
