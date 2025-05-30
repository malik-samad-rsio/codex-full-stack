import express from 'express';
import path from 'path';
import React from 'react';
import { Sequelize } from 'sequelize';
import { renderToString } from 'react-dom/server';
import App from '../client/App';
import userRouter from './routes/users';
import { User } from './models/user';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// Sequelize initialization
const sequelize = new Sequelize(process.env.DB_NAME || 'codex', process.env.DB_USER || 'root', process.env.DB_PASS || '', {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql'
});
User.initialize(sequelize);
sequelize.sync();

// serve static client bundle
app.use('/client.js', express.static(path.join(__dirname, '../client-bundle/client.js')));

// swagger
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API routes
app.use('/api/users', userRouter);

app.get('/', async (req, res) => {
  const users = await User.findAll();
  const appHtml = renderToString(React.createElement(App, { users }));

  res.send(`<!doctype html>${appHtml}<script>window.__INITIAL_DATA__ = ${JSON.stringify(users)}</script>`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
