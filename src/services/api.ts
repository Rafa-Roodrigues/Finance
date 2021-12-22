import axios from "axios";

export const api = axios.create({
  baseURL: "https://finance-blush.vercel.app/api"
});