import express from "express";
import bodyParser from "body-parser";
import db from './database.js';
import path from 'path';
import productosRoutes from './routes/productos.js';
import cors from "cors";


import {PORT} from './config.js'

const app = express();
app.use(cors("*"));
app.disable("x-powered-by");
app.use(bodyParser.json());

app.set('port', 3000)

app.use("/productos", productosRoutes); 

app.use((req, res, netx)=>{
     console.log(`Route: ${req.url} Method: ${req.method}`);

     netx();
})

app.get("/", (req, res) => {
    res.send("¡Bienvenido!");
});

 

app.use('/src', express.static(new URL('src', import.meta.url).pathname));



app.use((req, res, next)=>{
    res.status(404).send(`No se encontro tu pagina loquill@ `)
})


//  app.listen(app.get('port'));
//  console.log(`Server ${app.get('appName')} on Port ${app.get('port')}`);

 app.listen(PORT);
 console.log('Server running on PORT', PORT)

