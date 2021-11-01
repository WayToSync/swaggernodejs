## Project

The goal of this project is to create a simple nodeJS program and document it with **Open API Swagger**.

## Getting Started

To create a simple nodeJS app :

### `npm init`

We will install the next dependency :

### `yarn add express lowdb morgan nanoid cors swagger-jsdoc swagger-ui-express`

We use :

**[express](https://github.com/expressjs/express)** as our server
**[lowDB](https://github.com/typicode/lowdb)** for the storage of our data
**[morgan](https://github.com/expressjs/morgan)** to output the log
**[nanoid](https://github.com/ai/nanoid)** to generate the unique identify
**[cors](https://github.com/expressjs/cors)** to setup the cors origin policy
**[swagger-JSDoc](https://www.npmjs.com/package/swagger-jsdoc)** to write the documentation using JSdoc syntax
**[swagger-UI-Express](https://www.npmjs.com/package/swagger-ui-express)** to serv the UI Express in our app

To access to the UI interface of Swagger go to this address :

**http://localhost:3000/api-docs/**

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Open API Swagger website](https://swagger.io/).
