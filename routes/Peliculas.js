
import { Router } from 'express';
const router = Router();

import { agregar, listar, eliminar, editar, listarUno } from "../controllers/controladorPeliculas.js";
/**
 * @swagger
 * tags:
 *   name: Peliculas
 *   description: API para gestionar peliculas
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Pelicula:
 *       type: object
 *       required:
 *         - Titulo
 *         - Año_Lanzamiento
 *         - Duracion
 *       properties:
 *         _id:
 *           type: string
 *           description: ID generado automáticamente por MongoDB
 *         Titulo:
 *           type: string
 *           description: Titulo de la película
 *         Año_Lanzamiento:
 *           type: number
 *           description: Año en que se lanzó la película
 *         Duracion:
 *           type: string
 *           description: Tiempo de duracion de la película
 *       example:
 *         _id: 6447550a6fa119613e87b013
 *         Titulo: La sospecha
 *         Año_Lanzamiento: 2013
 *         Duracion: 2h 33m
 */

/**
 * @swagger
 * /api/Peliculas:
 *   post:
 *     summary: Agrega una nueva película
 *     tags: [Pelicula]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pelicula'
 *     responses:
 *       200:
 *         description: Pelicula agregada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pelicula'
 *       400:
 *         description: Los campos titulo, año de lanzamiento y duracion son requeridos
 */
router.post("/", agregar);
/**
 * @swagger
 * /api/Peliculas:
 *   get:
 *     summary: Obtiene todas las peliculas
 *     tags: [Peliculas]
 *     responses:
 *       200:
 *         description: Lista de todos las peliculas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pelicula'
 */
router.get("/", listar);
/**
 * @swagger
 * /api/Peliculas/{id}:
 *   get:
 *     summary: Obtiene una pelciula por su id
 *     tags: [Peliculas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id de la pelicula a buscar
 *     responses:
 *       200:
 *         description: Pelicula encontrada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pelicula'
 *       404:
 *         description: La pelicula con el id especificado no fue encontrada
 */
router.get("/:id", listarUno);
/**
 * @swagger
 * /api/Pelicula/{id}:
 *   put:
 *     summary: Actualiza una pelicula existente
 *     tags: [Peliculas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la pelicula a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pelicula'
 *     responses:
 *       200:
 *         description: Pelicula actualizada exitosamente
 *       404:
 *         description: La pelicula con el ID especificado no fue editada
 *
 */
router.put("/:id", editar);
/**
 * @swagger
 * /api/Peliculas/{id}:
 *   delete:
 *     summary: Elimina una pelicula existente
 *     tags: [Peliculas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la pelicula a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pelicula'
 *     responses:
 *       200:
 *         description: Pelicula eliminada exitosamente
 *       404:
 *         description: La pelicula con el ID especificado no fue eliminada
 *
 */
router.delete("/:id", eliminar);

export default router;


