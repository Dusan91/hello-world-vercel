import { fakeFetch, fetch } from './setup';

export const api = {
  get: async (url, options) =>
    await fakeFetch({ ...options, url, method: 'GET' }),
  post: async (url, options) =>
    await fakeFetch({ ...options, url, method: 'POST' }),
  put: async (url, options) =>
    await fakeFetch({ ...options, url, method: 'PUT' }),
  delete: async (url, options) =>
    await fakeFetch({ ...options, url, method: 'DELETE' }),
  patch: async (url, options) =>
    await fakeFetch({ ...options, url, method: 'PATCH' }),
};
