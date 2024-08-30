import axios from 'axios';

describe('GET /api', () => {
  it('should display swagger doc', async () => {
    const res = await axios.get(`/api`);

    expect(res.status).toBe(200);
    expect(res.data.includes('swagger')).toBeTruthy();
  });
});
