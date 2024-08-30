import axios from 'axios';

export const axiosCall = <T>(
  path: string,
  method: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'option' = 'get',
  service = 'user',
  payload?: unknown,
): Promise<T> => {
  let url: string;

  switch (service) {
    case 'user':
      url = 'http://localhost:3001/api';
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
