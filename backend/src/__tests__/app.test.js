const request = require('supertest');
const app = require('../app');

jest.mock('../models/User', () => ({
  findOne: jest.fn().mockResolvedValue(null)
}));

describe('GET /', () => {
  it('should return health check success', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toEqual(true);
    expect(res.body.message).toContain('Bio Website Generator API is running');
  });
});

describe('GET /api/username/testuser', () => {
  it('should respond to username check route', async () => {
    const res = await request(app).get('/api/username/testuser');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toEqual(true);
  });
});
