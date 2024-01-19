import { CreateApp } from './app.mjs';
import { UserModel } from './models/user.mjs';

const server = new CreateApp({ userModel: UserModel });

server.up();