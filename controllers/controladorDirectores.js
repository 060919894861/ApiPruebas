import Directores from "../models/Directores.js";

const agregar = async (req, res) => {
  try {
    const director = new Directores(req.body);
    const directorGuardado = await director.save();
    res.json({ body: directorGuardado, ok: "SI", msg: "Director guardado." });
  } catch (error) {
    console.log(error);
  }
}

const listar = async (req, res) => {
  const directores = await Directores.find();
  res.json(directores);
}

const eliminar = async (req, res) => {
  const { id } = req.params;
  const director = await Directores.findById(id);
  console.log(director);

  if (!director) {
    const error = new Error("Directorr no encontrado.");
    return res.status(404).json({ msg: error.message, ok: "SI" });
  }
  try {
    await director.deleteOne({ _id: id });
    res.json({ msg: "Director eliminado correctamente.", ok: "SI" });
  } catch (error) {
    console.log(error);
  }
}
const editar = async (req, res) => {
  const { id } = req.params;
  const director = await Directores.findById(id);
  console.log(director);
  if (!director) {
    const error = new Error("Director no encontrado.")
    return res.status(404).json({ msg: error.message, ok: "SI" });
  }
  director.Fecha_Nacimiento = req.body.Fecha_Nacimiento || director.Fecha_Nacimiento;
  director.Nombre_Director = req.body.Nombre_Director || director.Nombre_Director;
  try {
    const directorGuardado = await director.save();
    res.json({ body: directorGuardado, msg: "Director actualizado correctamente.", ok: "SI" });
  } catch (error) {
    console.log(error);
  }

}

const listarUno = async (req, res) => {

  const { id } = req.params;
  const director = await Directores.findById(id)

  if (!director) {
    const error = new Error("Director no encontrado. ");
    return res.status(404).json({ msg: error.message, ok: "SI" });
  }

  res.json(director);
}
export {
  agregar,
  listar,
  eliminar,
  editar,
  listarUno
}
