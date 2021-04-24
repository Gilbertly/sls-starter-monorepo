import sample1 from 'sample1';
import lib from '../../../../libs';

export async function handler(event, context) {
  return {
    statusCode: 200,
    body: `Hello World! via auth service!`,
  };
}
