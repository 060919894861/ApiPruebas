import mongoose from "mongoose";
const peliculasSchema = mongoose.Schema({
  Titulo: {
    type: String,
    require: true,
    trim: true
  },
  Año_Lanzamiento: {
    type: Number,
    require: true,
    trim: true
  },
  Duracion: {
    type: String,
    require: true,
    trim: true
  }
});

const Peliculas = mongoose.model("Peliculas", peliculasSchema);
export default Peliculas;

