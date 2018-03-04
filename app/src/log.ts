import * as winston from 'winston';
import * as fs from 'fs';
const logDir = './logs';

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      colorize: true,
      level: 'info',
      maxsize: 100000,
      maxFiles: 10
    }),
    new (winston.transports.File)({
      filename: `${logDir}/application.log`,
      level: 'info',
      maxsize: 100000,
      maxFiles: 10
    })
  ]
});

module.exports=logger;
