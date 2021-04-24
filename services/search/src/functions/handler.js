import * as Sentry from '@sentry/node';

Sentry.init({ dsn: process.env.SENTRY_DSN || '' });

export async function handler(event, context) {
  return {
    statusCode: 200,
    body: `Hello World! via search service!`,
  };
}
