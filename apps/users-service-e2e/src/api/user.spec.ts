import axios from 'axios';
import { getUserDtoFixture } from '@evs/dtos';

describe('GET /api/user', () => {
  it('should return empty collection', async () => {
    const res = await axios.get(`/api/user`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBeTruthy();
  });

  it('should insert user in collection', async () => {
    const user = getUserDtoFixture();
    const res = await axios.post(`/api/user`, user);

    const expectedUserIsInCollection = res.data.find(userInCollection => userInCollection.firstName === user.firstName);
    expect(res.status).toBe(200);
    expect(res.data.length).not.toEqual(0);
    expect(expectedUserIsInCollection).toEqual(user);
  });

  it('should validate data for firstName', async () => {
    const user = {
      ...getUserDtoFixture(),
      firstName: '',
    };

    try {
      await axios.post(`/api/user`, user);
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
    const user = {
      ...getUserDtoFixture(),
      lastName: '',
    };

    try {
      await axios.post(`/api/user`, user);
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
    const user = {
      ...getUserDtoFixture(),
      email: '',
    };

    try {
      await axios.post(`/api/user`, user);
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
    const user = {
      ...getUserDtoFixture(),
      age: 10,
    };

    try {
      await axios.post(`/api/user`, user);
    } catch (error) {
      const errors = [
        'age must not be less than 18'
      ];

      expect(error.response.status).toBe(400);
      expect(error.response.data.message).toEqual(errors);
    }
  });

  it('should validate age, less than 99', async () => {
    const user = {
      ...getUserDtoFixture(),
      age: 100,
    };

    try {
      await axios.post(`/api/user`, user);
    } catch (error) {
      const errors = [
        'age must not be greater than 99'
      ];

      expect(error.response.status).toBe(400);
      expect(error.response.data.message).toEqual(errors);
    }
  });
});
