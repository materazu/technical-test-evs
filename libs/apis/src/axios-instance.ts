import axios from 'axios';

export const axiosCall = <T>(
  path: string,
  method: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'option' = 'get',
  service = 'items',
  payload?: unknown,
): Promise<T> => {
  let url: string;

  switch (service) {
    case 'items':
      url = process.env['ITEMS_URL'] ?? 'http://localhost:3000/api';
    break;
  }

  return new Promise((resolve, reject) => {
    return axios.request({
      url: `${url}/${path}`,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      data: payload ?? undefined,
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  });
};
