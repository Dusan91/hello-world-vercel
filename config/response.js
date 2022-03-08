class Response {
  constructor () {
    this.res = null
    this.err = null
  }

  setResponse (res) {
    this.res = res
  }

  setError (err) {
    this.err = err
  }
}
export default Response
