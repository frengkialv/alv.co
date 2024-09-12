import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const BaseHttpInstance = axios.create({
  baseURL: baseURL,
});
