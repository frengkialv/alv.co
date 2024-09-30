import axios from "axios";
import { getCookie } from "cookies-next";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://152.42.242.77:8000";
const accessToken = getCookie("access_token");

export const BaseHttpInstance = axios.create({
  baseURL: baseURL,
});

export const BaseHttpInstanceWithToken = axios.create({
  baseURL: baseURL,
  headers: {
    authorization: accessToken,
  },
});
