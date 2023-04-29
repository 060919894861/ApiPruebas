import Actores from "../models/Actores.js";

const agregar = async (req, res) => {
  try {
    const actor = new Actores(req.body);
    const actorGuardado = await actor.save();
    res.json({ body: actorGuardado, ok: "SI", msg: "Actor guardado." });
  } catch (error) {
    console.log(error);
  }
}

const listar = async (req, res) => {
  const actores = await Actores.find();
  res.json(actores);
}

const eliminar = async (req, res) => {
  const { id } = req.params;
  const actor = await Actores.findById(id);
  console.log(actor);

  if (!actor) {
    const error = new Error("Actor no encontrado.");
    return res.status(404).json({ msg: error.message, ok: "SI" });
  }
  try {
    await actor.deleteOne({ _id: id });
    res.json({ msg: "Actor eliminado correctamente.", ok: "SI" });
  } catch (error) {
    console.log(error);
  }
}
const editar = async (req, res) => {
  const { id } = req.params;
  const actor = await Actores.findById(id);
  console.log(actor);
  if (!actor) {
    const error = new Error("Actor no encontrado.")
    return res.status(404).json({ msg: error.message, ok: "SI" });
  }
  actor.Nombre_Actor = req.body.Nombre_Actor || actor.Nombre_Actor;
  actor.Fecha_Nacimiento = req.body.Fecha_Nacimiento || actor.Fecha_Nacimiento;
  try {
    const actorGuardado = await actor.save();
    res.json({ body: actorGuardado, msg: "Actor actualizado correctamente.", ok: "SI" });
  } catch (error) {
    console.log(error);
  }

}

const listarUno = async (req, res) => {

  const { id } = req.params;
  const actor = await Actores.findById(id)

  if (!actor) {
    const error = new Error("Actor no encontrado. ");
    return res.status(404).json({ msg: error.message, ok: "SI" });
  }

  res.json(actor);
}
export {
  agregar,
  listar,
  eliminar,
  editar,
  listarUno
}
