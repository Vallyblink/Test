import { createUser } from '../models/userModel.js';
import { database } from '../config.js';

const createUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user: dbUser, host: dbHost } = database;

    console.log('User:', dbUser);
    console.log('Host:', dbHost);
    console.log(email );
    console.log(password);
    console.log(req.body);
    
    const result = await createUser({ email, password });

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
};

export { createUserController };

