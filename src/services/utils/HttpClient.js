import APIError from "../../errors/APIError";
import delay from "../../utils/delay";

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(path, options = {}) {
    return this.makeRequest(path, {
      method: 'GET',
      headers: options?.headers
    });
  }

  post(path, options = {}) {
    return this.makeRequest(path, {
      method: 'POST',
      body: options?.body,
      headers: options?.headers,
    });
  }

  async makeRequest(path, options) {
    await delay(500)

    const headers = new Headers()

    if(options.body){
      headers.append('Content-Type', 'application/json')
    }

    if(options.headers){
      Object.entries(options.headers).forEach(([key, value]) => {
        headers.append(key, value)
      })
    }

    const response = await fetch(`${this.baseURL}${path}`, {
      method: options.method,
      headers: options.headers,
      body: JSON.stringify(options.body),
    });

    let body = null
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(response, body);
  }
}

export default HttpClient;
