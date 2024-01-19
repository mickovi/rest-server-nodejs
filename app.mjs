import express from 'express';
import { corsMiddleware } from './middleware/cors.mjs';
import { createUserRouter } from './routes/user.mjs';

export class CreateApp {
  constructor({ userModel }) {
    this.app = express();
    this.port = process.env.PORT || 8000;
    this.model = userModel;
    this.userRoutePath = '/api/users';
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Disable x-powered-by header
    this.app.disable('x-powered-by');

    // Middleware to enable cors
    this.app.use(corsMiddleware());

    // Middleware to log all requests
    this.app.use(express.json());

    // Load public resources
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.userRoutePath, createUserRouter({ userModel: this.model }));
  }

  up() {
    this.app.listen(this.port, () => {
      console.log(`
        🚀  Server is running!
        🔉  Listening on port ${this.port}
        📭  Query at http://localhost:${this.port}
      `);
    });
  }
}