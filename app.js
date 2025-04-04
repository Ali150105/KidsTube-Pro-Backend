const express = require('express');
const conectarDB = require('./utils/conexion');
const videoRoutes = require('./routes/videoRoutes');
const cors = require("cors");

const app = express();
conectarDB();

app.use(cors({
  domains: '*',
  methods: "*"
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.json());

  
app.use('/videos', videoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
