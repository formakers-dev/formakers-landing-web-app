import axios from "axios";
import config from "../../../config";

const instance = axios.create({
  baseURL: config.serverBaseUrl,
  withCredentials: true,
});

export default instance;