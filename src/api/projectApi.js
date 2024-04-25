import { axiosInstance } from "./api";

const prjApi = {
  addProject: async (accessToken, projectData) => {
    try {
      const response = await axiosInstance.post(
        "/projects/addProject",
        projectData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },
  getAllProjects: async (accessToken) => {
    try {
      const response = await axiosInstance.get("/projects/getProjects", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },
  // Add more API functions here as needed
};

export default prjApi;
