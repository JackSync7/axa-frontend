import axios from "axios";

// Create base URL API
export const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
