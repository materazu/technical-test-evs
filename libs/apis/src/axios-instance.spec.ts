import { axiosCall } from './axios-instance';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('axiosCall', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mock: any;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should successfully make a GET request to the items service', async () => {
    const mockResponseData = { data: 'mocked response' };
    mock.onGet('http://localhost:3000/api/test-path').reply(200, mockResponseData);

    const result = await axiosCall<typeof mockResponseData>('test-path');

    expect(result).toEqual(mockResponseData);
    expect(mock.history.get[0].url).toBe('http://localhost:3000/api/test-path');
    expect(mock.history.get[0].method).toBe('get');
  });

  it('should return an error when the request fails', async () => {
    const mockError = new Error('Network Error');
    mock.onGet('http://localhost:3000/api/test-path').reply(500, mockError);

    await expect(axiosCall<unknown>('test-path')).rejects.toThrow('Request failed with status code 500');
    expect(mock.history.get[0].url).toBe('http://localhost:3000/api/test-path');
    expect(mock.history.get[0].method).toBe('get');
  });
});
