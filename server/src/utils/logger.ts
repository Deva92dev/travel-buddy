import logger from 'pino';

export const log = logger({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  formatters: {
    level: (label: string): { level: string } => ({ level: label }),
  },
});
