import axios, { AxiosRequestConfig } from "axios";

export enum HttpMethod {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

const API_ROOT: string =
  process.env.OPENWEATHERMAP_API_URL ||
  "http://api.openweathermap.org/data/2.5";

function createRequestConfig(method: HttpMethod, body: any, url: string, baseURL?: string): AxiosRequestConfig {
  const requestConfig: AxiosRequestConfig = {
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

export async function createRequest<T>(method: HttpMethod, url: string, body: any, baseURL?: string): Promise<T> {
  const request = createRequestConfig(method, body, url, baseURL);
  const response = await axios(request);
  return response.data;
}

export function get<T>(url: string): Promise<T> {
  return createRequest(HttpMethod.GET, url, null);
}

export function post<T>(url: string, body: any): Promise<T> {
  return createRequest(HttpMethod.POST, url, body);
}

export function put<T>(url: string, body: any): Promise<T> {
  return createRequest(HttpMethod.PUT, url, body);
}

export function del<T>(url: string): Promise<T> {
  return createRequest(HttpMethod.DELETE, url, null);
}
