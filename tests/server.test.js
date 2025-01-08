const request = require('supertest');
const app = require('../core/server');

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Welcome to the AI Crypto Service!');
  });
});
