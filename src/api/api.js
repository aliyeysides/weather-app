import axios from "axios";

const API_ROOT =
  process.env.OPENWEATHERMAP_API_URL ||
  "http://api.openweathermap.org/data/2.5";

function createRequestConfig(method, body, url, baseURL) {
  const requestConfig = {
    method,
    url,
    baseURL: baseURL || `${API_ROOT}/`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };

  if (body) {
    requestConfig.data = JSON.stringify(body);
  }

  return requestConfig;
}

export async function createRequest(method, url, body, baseURL) {
  const request = createRequestConfig(method, body, url, baseURL);
  const response = await axios(request);
  return response.data;
}

export function get(url) {
  return createRequest("GET", url, null);
}

export function post(url, body) {
  return createRequest("POST", url, body);
}

export function put(url, body) {
  return createRequest("PUT", url, body);
}

export function del(url) {
  return createRequest("DELETE", url, null);
}
