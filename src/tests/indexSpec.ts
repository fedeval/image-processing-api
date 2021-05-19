import app from '../app';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('Gets /api endpoint', async (done) => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    done();
  });
});
