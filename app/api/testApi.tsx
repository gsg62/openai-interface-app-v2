import axios from "axios";

// test api deployed on render
const apiEndpoint = "https://test-openai-api-htbc.onrender.com";

export const openaiApi = axios.create({
  baseURL: apiEndpoint,
  headers: {
    accept: "application/json",
  },
});
