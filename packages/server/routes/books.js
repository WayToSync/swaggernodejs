import express from 'express';
import db from '../db/lowdb.js';
import { nanoid } from 'nanoid';
const router = express.Router();

const idLength = 8;

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Returns the list of all the books
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */

router.get('/', async (req, res) => {
  console.log('Helloo');
  console.log(db.data.books);
  const books = await db.data.books;

  res.send(books);
});

router.get('/:id', async (req, res) => {
  const book = await db.data.books.find({ id: req.params.id }).value();
  res.send(book);
});

router.post('/', (req, res) => {
  try {
    const book = {
      id: nanoid(idLength),
      ...req.body,
    };
    req.app.db.get('books').push(book).write();
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.put('/:id', (req, res) => {
  try {
    req.app.db
      .get('books')
      .find({ id: req.params.id })
      .assign(req.body)
      .write();
    res.send(req.app.db.get('books').find({ id: req.params.id }));
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete('/:id', (req, res) => {
  req.app.db.get('books').remove({ id: req.params.id }).write();

  res.sendStatus(200);
});

export default router;
