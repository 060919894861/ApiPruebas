import { Router } from 'express';
const router = Router();

import { agregar, listar, eliminar, editar, listarUno } from "../controllers/controladorActores.js";
/**
 * @swagger
 * tags:
 *   name: Actor
 *   description: API para gestionar peliculas
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Actor:
 *       type: object
 *       required:
 *         - Nombre_Actor
 *         - Fecha_Nacimiento
 *         - Empresa_Produccion
 *       properties:
 *         _id:
 *           type: string
 *           description: ID generado automáticamente por MongoDB
 *         Nombre_Actor:
 *           type: string
 *           description: Nombre del actor
 *         Fecha_Nacimiento:
 *           type: string
 *           description: fecha en que nacio el actor
 *         Empresa_Produccion:
 *           type: string
 *           description: Produccion de las peliculas
 *       example:
 *         _id: 644c3c9b3482b0c919c1f404
 *         Nombre_Actor: Will Smith 
 *         Fecha_Nacimiento: 1968-09-25
 *         Empresa_Produccion: Overbrook Entertainment, Westbrook
 *         
 */

/**
 * @swagger
 * /api/Actor:
 *   post:
 *     summary: Agrega un nuevo actor
 *     tags: [Actor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Actor'
 *     responses:
 *       200:
 *         description: Actor agregado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Actor'
 *       400:
 *         description: Los campos nombre actor, fecha de nacimiento y nombre produccion son requeridos
 */
router.post("/", agregar);
/**
 * @swagger
 * /api/Actor:
 *   get:
 *     summary: Obtiene todos los Actores
 *     tags: [Actor]
 *     responses:
 *       200:
 *         description: Lista de todos los actores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Actor'
 */
router.get("/", listar);
/**
 * @swagger
 * /api/Actor/{id}:
 *   get:
 *     summary: Obtiene un actor por su id
 *     tags: [Actor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del actor a buscar
 *     responses:
 *       200:
 *         description: actor encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Actor'
 *       404:
 *         description: El actor con el id especificado no fue encontrado
 */
router.get("/:id", listarUno);
/**
 * @swagger
 * /api/Actor/{id}:
 *   put:
 *     summary: Actualiza un actor existente
 *     tags: [Actor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del actor a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Actor'
 *     responses:
 *       200:
 *         description: Actor actualizado exitosamente
 *       404:
 *         description: El actor con el ID especificado no fue editado
 *
 */
router.put("/:id", editar);
/**
 * @swagger
 * /api/Actor/{id}:
 *   delete:
 *     summary: Elimina una actor existente
 *     tags: [Actor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del actor a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Actor'
 *     responses:
 *       200:
 *         description: Actor eliminado exitosamente
 *       404:
 *         description: El actor con el ID especificado no fue eliminado
 *
 */
router.delete("/:id", eliminar);

export default router;
