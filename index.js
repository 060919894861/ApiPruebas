import express from 'express';
import dotenv from 'dotenv';
import conectarBasesD from './config/bases.js';
import Peliculas from  "./routes/Peliculas.js";
import Directores from "./routes/DirectoresRuta.js";
import Actores from "./routes/ActoresRutas.js";
import swaggerUiExpress from 'swagger-ui-express';
import swaggerSpec from './Docs/swagger.js';


 const app= express();
 app.use(express.json());

 dotenv.config();

 conectarBasesD();
//Empoints
 app.use("/api/Peliculas", Peliculas);
 app.use("/api/Directores", Directores);
 app.use("/api/Actor", Actores); 
//Ruta de documentación
app.use("/documentacion", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec)); 


 const PORT = process.env.PORT || 3000


 app.listen(PORT, ()=>{
  console.log(`Api escuchando en ${PORT}`)
 })

