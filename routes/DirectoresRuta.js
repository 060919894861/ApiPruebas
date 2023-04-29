import { Router } from 'express';
const router = Router();

import { agregar, listar, eliminar, editar, listarUno } from "../controllers/controladorDirectores.js";

/**
 * @swagger
 * tags:
 *   name: Directores
 *   description: API para gestionar peliculas
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Directores:
 *       type: object
 *       required:
 *         - Fecha_Nacimiento
 *         - Nombre_Director
 *       properties:
 *         _id:
 *           type: string
 *           description: ID generado automáticamente por MongoDB
 *         Fecha_Nacimiento:
 *           type: string
 *           description: fecha en que nació el director
 *         Nombre_Director:
 *           type: string
 *           description: nombre del director
 *       example:
 *         _id: 644c39573482b0c919c1f3fa
 *         Fecha_Nacimiento: 1970-07-30
 *         Nombre_Director: Christopher Nolan
 */

/**
 * @swagger
 * /api/Directores:
 *   post:
 *     summary: Agrega un nuevo director
 *     tags: [Directores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Director'
 *     responses:
 *       200:
 *         description: Director agregado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Director'
 *       400:
 *         description: Los campos fecha de nacimiento y nombre de director son requeridos
 */

router.post("/", agregar);
/**
 * @swagger
 * /api/Directores:
 *   get:
 *     summary: Obtiene todas los directores
 *     tags: [Directores]
 *     responses:
 *       200:
 *         description: Lista de todos los directores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Directores'
 */
router.get("/", listar);
/**
 * @swagger
 * /api/Directores/{id}:
 *   get:
 *     summary: Obtiene un director por su id
 *     tags: [Directores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del director a buscar
 *     responses:
 *       200:
 *         description: Director encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Director'
 *       404:
 *         description: El director con el id especificado no fue encontrado
 */
router.get("/:id", listarUno);
/**
 * @swagger
 * /api/Directores/{id}:
 *   put:
 *     summary: Actualiza un director existente
 *     tags: [Directores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del director a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Director'
 *     responses:
 *       200:
 *         description: Director actualizado exitosamente
 *       404:
 *         description: El director con el ID especificado no fue editado
 *
 */
router.put("/:id", editar);
/**
 * @swagger
 * /api/Directores/{id}:
 *   delete:
 *     summary: Elimina una director existente
 *     tags: [Directores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del director a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Director'
 *     responses:
 *       200:
 *         description: Director eliminada exitosamente
 *       404:
 *         description: El directir con el ID especificado no fue eliminado
 *
 */
router.delete("/:id", eliminar);

export default router;
