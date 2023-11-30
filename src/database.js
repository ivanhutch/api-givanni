import mysql from 'mysql2';
import {
   DB_HOST,
   DB_PORT,
   DB_DATABASE,
   DB_USER,
   DB_PASSWORD
} from './config.js'

const db = mysql.createConnection({
  host: DB_HOST,  
  user: DB_USER, 
  password: DB_PASSWORD,
  database: DB_DATABASE, 
});

// const db = mysql.createConnection({
//   host: 'localhost',  
//   user: 'root', 
//   password: '123456789',
//   database: 'ecommerce_vinos', 
// });

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.message);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

export default db;
