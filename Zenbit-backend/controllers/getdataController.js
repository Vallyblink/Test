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

const getDataFromDatabase = async (req, res) => {
  try {
    const queryResult = await pool.query('SELECT * FROM data');
    const data = queryResult.rows;

    res.status(200).json(data);
  } catch (error) {
    console.error('Помилка запиту:', error);
    res.status(500).send('Error fetching data');
  }
};

export { getDataFromDatabase };
