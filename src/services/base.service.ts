import axios from "axios";
import { getCookie } from "cookies-next";

// const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://alvco-be.my.id";

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
