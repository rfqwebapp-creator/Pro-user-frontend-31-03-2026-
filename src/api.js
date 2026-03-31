import axios from "axios";

const API = axios.create({
  baseURL: "http://13.235.51.239/api"
});

export default API;