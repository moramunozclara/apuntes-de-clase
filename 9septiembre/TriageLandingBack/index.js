// ES MODULES
import express from 'express';
import cors from 'cors';

// Importar configuración desde config.js
import { PORT, URL } from './config/config.js';

// Importar variables de entorno
import dotenv from 'dotenv';
dotenv.config();


// importar rutas
import indexRoutes from './routes/index.routes.js';

// helpers /o/ utilities
import { getBoolean } from './utils/utils.js';

const app = express();

// ---------------------------
//        Middlewares
// ---------------------------
app.use(cors());
app.use(express.json());

// ---------------------------
//     Ruta base de la URL
// ---------------------------
app.use("/API/v1/", indexRoutes);




// Aviso en consola
app.listen(PORT, () => {
  console.log(`Servidor iniciado en ${URL}:${PORT}`);
});

// ---------------------------
//          RUTAS
// ---------------------------

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");

  const landingHTML = `
                      <h1>Bienvenidos a nuestra REST-API</h1>
                      <h2>Mi backend es: <strong>${URL}:${PORT} </h2>
                      <h2>
                        <ul>
                            <li><a href= "${URL}:${PORT}/api/v1/hero">Hero</a></li>
                            <li><a href= "${URL}:${PORT}/api/v1/sections">Sections</a></li>
                            <li> Falta <a href= "${URL}:${PORT}/api/v1/features">features</a></li>
                            <li>Falta <a href= "${URL}:${PORT}/api/v1/praise">praise</a></li>
                        </ul>
                      </h2>
                      `;
  res.send(landingHTML);
});