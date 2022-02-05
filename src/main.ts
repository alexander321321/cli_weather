import { App } from "./app";
import { UserController } from './users/users.controller';
import { LoggerService } from './logger/logger.service';

async function bootstrap() {
  const logger = new LoggerService()
  const app = new App(logger, new UserController(logger));
  await app.init();
}

bootstrap();