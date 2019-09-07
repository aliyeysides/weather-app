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
  console.log("REQUEST::", request);
  const response = await axios(request);
  console.log("RESPONSE::", response.data);
  //   if (response.status === 204) {
  //     return response.data;
  //   }

  //   if (response.status !== 200) {
  //     console.log("something went wrong");
  //     // let errorMessage;
  //     // if (response.status === 422) {
  //     //   errorMessage = response.data;
  //     //   throw Error(errorMessage)
  //     // } else if (response.status === 401) {
  //     //   console.error("Unauthorized http request");
  //     // } else {
  //     //     throw Error(response)
  //     // }
  //   }

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
