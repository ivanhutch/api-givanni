import express from "express";
import db from '../database.js';

const router = express.Router();

router.get("/", (req, res) => {
        db.query('SELECT * FROM productos', (err, results) => {
            if (err) {
                console.error('Error al obtener productos: ' + err.message);
                res.status(500).json({ error: 'Error interno del servidor' });
            } else {
                res.json(results);
            }
        });
    });


router.get("/:id", (req, res) => {
        const id = parseInt(req.params.id);
    
        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID no válido' });
        }
    
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


router.get('/buscar/:nombre', (req, res) => {
        const nombre = req.params.nombre;
    
        if (!nombre) {
            return res.status(400).json({ error: 'El nombre no puede estar vacío' });
        }
    
        db.query('SELECT * FROM productos WHERE Nombre LIKE ?', [`%${nombre}%`], (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json(results);
            }
        });
    });


router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const newData = req.body;
    
        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID no válido' });
        }
    
        db.query('UPDATE productos SET ? WHERE id = ?', [newData, id], (err, result) => {
            if (err) {
                console.error('Error al editar el producto: ' + err.message);
                res.status(500).json({ error: 'Error interno del servidor' });
            } else if (result.affectedRows === 0) {
                res.status(404).json({ error: 'Producto no encontrado' });
            } else {
                res.json({ message: 'El producto fue editado exitosamente', editedProductId: id });
            }
        });
    });

router.delete("/:id", (req, res) => {
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

export default router;
