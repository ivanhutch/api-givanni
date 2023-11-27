import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',  
  user: 'root', 
  password: '123456789',
  database: 'ecommerce_vinos', 
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.message);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

export default db;
