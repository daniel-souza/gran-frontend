import express from 'express';
import routes from './routes.js';

import swaggerUi from 'swagger-ui-express';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import cors from 'cors';


const __dirname = path.dirname(new URL(import.meta.url).pathname);

const swaggerFilePath = path.join(__dirname, 'swagger.yaml');

// Load and parse your OpenAPI YAML definition
const swaggerDocument = yaml.load(fs.readFileSync(swaggerFilePath, 'utf8'));
class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    }

    routes() {
        this.app.use(routes);
    }
}

export default new App().app;