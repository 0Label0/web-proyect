import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err)=> {
  if (err) {
    console.error(`Error en la conexión con la base de datos: ${err.message}`);
    return;
  }
  console.log('Base de datos conectada con éxito');
});