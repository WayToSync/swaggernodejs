import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import specs from './api/swagger.js';
import db from './db/lowdb.js';
import router from './routes/books.js';

await db.read();
db.data ||= { books: [] };

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // See https://expressjs.com/en/resources/middleware/morgan.html

app.use('/books', router);

const listener = app.listen(process.env.PORT || 4000, function () {
  console.log(
    `Your app is listening on port http://localhost:${
      listener.address().port
    }/api-docs/`
  );
});
