import Response from './response.js'
import axios from './axios'
import { AxiosHandleData } from './handleData.js'

export const fetch = async (methodData) => {
  const data = new AxiosHandleData(methodData)
  const response = new Response()
  await axios(data)
    .then((res) => response.setResponse(res.data))
    .catch((err) => response.setError(err))
  return response
}
