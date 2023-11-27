import express from "express";
import bodyParser from "body-parser";
import db from './database.js';
import Joi from 'joi';

const app = express();

const productoSchema = Joi.object({
    nombre: Joi.string().required(),
    precio: Joi.number().required(),
  });

app.use(bodyParser.json());

app.use((req, res, netx)=>{
     console.log(`Route: ${req.url} Method: ${req.method}`);

     netx();
})

app.get("/", (req, res) => {
    res.send("¡Bienvenido!");
});

app.get("/productos", (req, res) => {
    db.query('SELECT * FROM productos', (err, results) => {
        if (err) {
            console.error('Error al obtener productos: ' + err.message);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.json(results);
        }
    });
});

app.get("/productos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    db.query('SELECT * FROM productos WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Error al obtener el producto: ' + err.message);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    });
});

app.get('/productos/buscar', (req, res) => {
    const producto = productoSchema.validate(req.query);
  
    if (producto.error) {
      res.status(400).json({ error: producto.error });
    } else {
      db.query('SELECT * FROM productos WHERE Nombre LIKE ?', [producto.nombre], (err, results) => {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
          res.json(results);
        }
      });
    }
  });

app.post("/productos", (req, res) => {
    const body = req.body;
    db.query('INSERT INTO productos SET ?', [body], (err, result) => {
        if (err) {
            console.error('Error al agregar el producto: ' + err.message);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.json({ id: result.insertId, ...body });
        }
    });
});

app.delete("/productos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    db.query('DELETE FROM productos WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error('Error al borrar el producto: ' + err.message);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Producto no encontrado' });
        } else {
            res.json({ message: 'El producto fue borrado exitosamente', deletedProductId: id });
        }
    });
});


app.use((req, res, next)=>{
    res.status(404).send(`No se encontro tu pagina`)
})

app.listen(3000, () => {
    console.log(`El servidor está escuchando en el puerto 3000`);
});
