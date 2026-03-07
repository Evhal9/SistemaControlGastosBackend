const express = require('express');
const db = require('./db/models');
const userRoutes = require ("./src/routes/userRoutes")
const ingresosRoutes = require ("./src/routes/ingresosRoutes")
const gastosRoutes = require ("./src/routes/gastosRoutes")

const app = express();
app.use(express.json());



app.use('/users', userRoutes)
app.use('/income', ingresosRoutes)
app.use('/expense', gastosRoutes)


app.listen(3000, async () => {
  await db.sequelize.authenticate();
  console.log("Servidor corriendo en puerto 3000");
});