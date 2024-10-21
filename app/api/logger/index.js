import pino from 'pino';

const loggerOptions = {
  level: process.env.LOG_LEVEL || 'info',
  timestamp: pino.stdTimeFunctions.isoTime,
};

const logger = pino(loggerOptions);

export default logger;
