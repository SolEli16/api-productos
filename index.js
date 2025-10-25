const express = require('express');
const cors = require('cors');
const app = express();
const productos = require('./db.json');

app.use(cors());

app.get('/productos', (req, res) => {
  res.json(productos);
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
