import axios from 'axios';
import { getItemDtoFixture } from '@evs/dtos';

describe('GET /api/items', () => {
  it('should return empty collection', async () => {
    const res = await axios.get(`/api/items`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBeTruthy();
  });

  it('should insert item in collection', async () => {
    const item = getItemDtoFixture();
    const res = await axios.post(`/api/items`, item);

    const expectedItemIsInCollection = res.data.find(itemInCollection => itemInCollection.firstName === item.firstName);
    expect(res.status).toBe(200);
    expect(res.data.length).not.toEqual(0);
    expect(expectedItemIsInCollection).toEqual(item);
  });

  it('should validate data for firstName', async () => {
    const item = {
      ...getItemDtoFixture(),
      firstName: '',
    };

    try {
      await axios.post(`/api/items`, item);
    } catch (error) {
      const errors = [
        'firstName must contain only letters (a-zA-Z)',
        'firstName should not be empty'
      ];

      expect(error.response.status).toBe(400);
      expect(error.response.data.message).toEqual(errors);
    }
  });

  it('should validate data for lastName', async () => {
    const item = {
      ...getItemDtoFixture(),
      lastName: '',
    };

    try {
      await axios.post(`/api/items`, item);
    } catch (error) {
      const errors = [
        'lastName must contain only letters (a-zA-Z)',
        'lastName should not be empty'
      ];

      expect(error.response.status).toBe(400);
      expect(error.response.data.message).toEqual(errors);
    }
  });

  it('should validate data for email', async () => {
    const item = {
      ...getItemDtoFixture(),
      email: '',
    };

    try {
      await axios.post(`/api/items`, item);
    } catch (error) {
      const errors = [
        'email must be an email',
        'email should not be empty'
      ];

      expect(error.response.status).toBe(400);
      expect(error.response.data.message).toEqual(errors);
    }
  });

  it('should validate age, more than 18', async () => {
    const item = {
      ...getItemDtoFixture(),
      age: 10,
    };

    try {
      await axios.post(`/api/items`, item);
    } catch (error) {
      const errors = [
        'age must not be less than 18'
      ];

      expect(error.response.status).toBe(400);
      expect(error.response.data.message).toEqual(errors);
    }
  });

  it('should validate age, less than 99', async () => {
    const item = {
      ...getItemDtoFixture(),
      age: 100,
    };

    try {
      await axios.post(`/api/items`, item);
    } catch (error) {
      const errors = [
        'age must not be greater than 99'
      ];

      expect(error.response.status).toBe(400);
      expect(error.response.data.message).toEqual(errors);
    }
  });
});
