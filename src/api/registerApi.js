import axios from "axios";
import { axiosInstance, debounce } from "./api";

const RegApi = {
  registerUser: async (userData) => {
    try {
      const response = await axiosInstance.post("/users/register", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  loginUser: async (userData) => {
    try {
      const response = await axiosInstance.post("/users/login", userData);
      console.log("hi");
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default RegApi;
