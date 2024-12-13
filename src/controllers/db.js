import { Pool } from 'pg';

const pool = new Pool({
  user: 'citas_user',
  host: 'localhost',
  database: 'citas_db',
  password: 'citas_password',
  port: 5432,
});

export default pool