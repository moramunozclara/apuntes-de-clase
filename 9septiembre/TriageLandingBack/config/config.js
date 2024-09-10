//  importo aquí mis variables de entorno (importa librería dotenv)
import dotenv from 'dotenv';

dotenv.config();

// crear variables de configuracion del proyecto
export const PORT = process.env.PORT || 3000;  // Toma el PORT de .env o usa 3000 como default
export const URL = process.env.URL || 'http://localhost';  // Toma la URL de .env o usa localhost
