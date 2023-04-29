import mongoose from "mongoose";
const actoresSchema = mongoose.Schema({
  Nombre_Actor: {
    type: String,
    require: true,
    trim: true
  },

  Fecha_Nacimiento: {
    type: String,
    require: true,
    trim: true
  },
  Empresa_Producción: {
    type: String,
    require: true,
    trim: true
  }

});
const Actores = mongoose.model("Actores", actoresSchema);
export default Actores;
