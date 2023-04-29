import mongoose from "mongoose";
const directoresSchema = mongoose.Schema({

  Fecha_Nacimiento: {
    type: String,
    require: true,
    trim: true
  },

  Nombre_Director: {
    type: String,
    require: true,
    trim: true
  }

});

const Directores = mongoose.model("Directores", directoresSchema);
export default Directores;
