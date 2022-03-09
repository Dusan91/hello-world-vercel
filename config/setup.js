import Response from './response.js';
import axios from './axios';
import { AxiosHandleData } from './handleData.js';
import DB from '../db.json';

const fakePromise = (data, url) => {
  return new Promise((resolve, reject) => {
    if (data[url]) resolve(data[url]);
    reject();
  });
};
export const fetch = async methodData => {
  const data = new AxiosHandleData(methodData);
  const response = new Response();
  await axios(data)
    .then(res => response.setResponse(res.data))
    .catch(err => response.setError(err));
  return response;
};

export const fakeFetch = async methodData => {
  const db_data = JSON.parse(JSON.stringify(DB));
  const data = new AxiosHandleData(methodData);
  const response = new Response();
  const url = data.url.split('/');
  fakePromise(db_data, url[1])
    .then(res => {
      let tmpRes = res;
      if (url[2]) {
        const filteredRes = res.filter(data => String(data.id) === url[2]);
        tmpRes = filteredRes.length ? filteredRes[0] : null;
      }
      response.setResponse(tmpRes);
    })
    .catch(err => response.setError(err));
  return response;
};
