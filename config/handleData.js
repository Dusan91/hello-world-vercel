const APP_JSON = 'application/json'
const MULTIPART = 'multipart/form-data'

class HandleData {
  constructor ({
    url,
    method,
    responseType = APP_JSON,
    contentType = APP_JSON,
    headers,
    data,
    ...rest
  }) {
    this.responseType = responseType
    this.method = method
    this.headers = {
      'Content-Type': contentType,
      ...headers
    }
    this.url = url
    this.baseUrl = process.env.VUE_APP_BASE_URL
    if (data) {
      if (contentType === MULTIPART) return this.setBody(data)
      else this.setBody(JSON.stringify(data))
    }
  }

  setBody () {
    return {}
  }
}

export class AxiosHandleData extends HandleData {
  setBody (data) {
    this.data = data
  }
}

// Example for fetch
// export class FetchHandleData extends HandleData {
//   setBody(data) {
//     this.body = data;
//   }
// }
