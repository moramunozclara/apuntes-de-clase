// ES MODULES
import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

// Aviso en consola
app.listen(PORT, () => {
  console.log(`Servidor iniciado en ${PORT}`);
});



