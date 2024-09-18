// ES MODULES
import express from 'express';
import cors from 'cors';

// Importar configuración desde config.js
import { PORT, URL } from './config/config.js';

// importar rutas
import indexRoutes from './routes/index.routes.js';

// helpers /o/ utilities
import { getBoolean, getLastId } from './utils/utils.js';

const app = express();

// ---------------------------
//        Middlewares
// ---------------------------
app.use(cors());
app.use(express.json());


// Hacer pública la carpeta Public
app.use(express.static('public'));


// ---------------------------
//    DISEÑO LANDING HTML
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
                            <li><a href= "${URL}:${PORT}/api/v1/inbox">inbox</a></li>

                        </ul>
                      </h2>
                      `;
  res.send(landingHTML);
});

// ---------------------------
//     Ruta BASE de la URL
// ---------------------------
app.use("/API/v1/", indexRoutes);


// ---------------------------
//   Middleware de Manejo de Errores
// ---------------------------
app.use((err, req, res, next) => {
  console.error('Error en la API:', err);  // Para depuración
  res.status(500).json({
    status: "error",
    msg: "Error en la API",
    error: err.message
  });
});


// Aviso en consola
app.listen(PORT, () => {
  console.log(`Servidor iniciado en ${URL}:${PORT}`);
});