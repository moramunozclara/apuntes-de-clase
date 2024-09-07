// ES MODULES
import express from 'express';
import cors from 'cors';

// importar data del json (incluir .js)
import { } from './data/mockData.js';

// importar rutas
import indexRoutes from './routes/index.routes.js';

// helpers /o/ utilities
import { } from './utils/utils.js';

const app = express();

// ---------------------------
//        Middlewares
// ---------------------------
app.use(cors());
app.use(express.json());
app.use("API/v1/", indexRoutes);

const PORT = process.env.PORT || 3000;

// Aviso en consola
app.listen(PORT, () => {
  console.log(`Servidor iniciado en ${PORT}`);
});

// ---------------------------
//          RUTAS
// ---------------------------
