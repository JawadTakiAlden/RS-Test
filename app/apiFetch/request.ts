import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// Define the structure of the options parameter
interface RequestOptions extends AxiosRequestConfig {}

const baseURL = "https://test.omar.rs4it.com";

// Create an Axios instance with a base URL
const client: AxiosInstance = axios.create({
  baseURL,
});

export const request = async (
  options: RequestOptions
): Promise<AxiosResponse> => {
  // client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
  //   "bla"
  // )}`;
  client.defaults.headers.common.Accept = "application/json";
  client.defaults.headers.common["Content-Type"] = "application/json";
  return client(options).then((res) => res);
};
