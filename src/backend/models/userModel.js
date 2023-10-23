import pg from 'pg';
const { Pool } = pg;

const SECRET_PASSWORD = process.env.SECRET_PASSWORD;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'TestTask',
  password: SECRET_PASSWORD,
  port: 5432,
});

const queryDatabase = async () => {
  try {
    const queryResult = await pool.query('SELECT * FROM user_data');
    const contacts = queryResult.rows;
    
    console.log('Список контактів:');
    contacts.forEach((user) => {
      console.log(`Ім'я: ${user.name}, Email: ${user.email}`);
    });

    pool.end();
  } catch (error) {
    console.error('Помилка запиту:', error);
  }
};

const createUser = async (user) => {
  try {
    const query = 'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *';
    const result = await pool.query(query, [user.username, user.email]);
    return result;
  } catch (error) {
    console.error('Помилка при створенні користувача:', error);
    throw error;
  }
};

export { queryDatabase, createUser };
