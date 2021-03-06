import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
      description: 'A simple Express Library API',
    },
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJSDoc(options);

export default specs;
