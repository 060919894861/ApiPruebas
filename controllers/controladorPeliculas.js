import Peliculas from "../models/Peliculas.js";

const agregar = async (req, res) => {
  try {
    const pelicula = new Peliculas(req.body);
    const peliculaGuardada = await pelicula.save();
    res.json({ body: peliculaGuardada, ok: "SI", msg: "Pelicula guardada." });
  } catch (error) {
    console.log(error);
  }
}

const listar = async (req, res) => {
  const peliculas = await Peliculas.find();
  res.json(peliculas);
}

const eliminar = async (req, res) => {
  const { id } = req.params;
  const pelicula = await Peliculas.findById(id);
  console.log(pelicula);

  if (!pelicula) {
    const error = new Error("Pelicula no encontrada.");
    return res.status(404).json({ msg: error.message, ok: "SI" });
  }
  try {
    await Peliculas.deleteOne({ _id: id });
    res.json({ msg: "Pelicula eliminada correctamente.", ok: "SI" });
  } catch (error) {
    console.log(error);
  }
}
const editar = async (req, res) => {
  const { id } = req.params;
  const pelicula = await Peliculas.findById(id);
  console.log(pelicula);
  if (!pelicula) {
    const error = new Error("Pelicula no encontrada.")
    return res.status(404).json({ msg: error.message, ok: "SI" });
  }
  peliculas.Titulo = req.body.Titulo || peliculas.Titulo;
  peliculas.Año_Lanzamiento = req.body.Año_Lanzamiento || peliculas.Año_Lanzamiento;
  peliculas.Duracion = req.body.Duracion || peliculas.Duracion;

  try {
    const peliculaGuardada = await Peliculas.save();
    res.json({ body: peliculaGuardada, msg: "Pelicula actualizada correctamente.", ok: "SI" });
  } catch (error) {
    console.log(error);
  }

}

const listarUno = async(req, res) => {
 
  const { id } = req.params;
  const pelicula = await Peliculas.findById(id)

  if (!pelicula) {
      const error = new Error("Pelicula no encontrada. ");
      return res.status(404).json({ msg: error.message, ok: "SI" });
  }

  res.json(pelicula);
}
export {
  agregar,
  listar,
  eliminar,
  editar,
  listarUno
}



