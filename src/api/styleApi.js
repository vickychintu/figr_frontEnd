import { axiosInstance } from "./api";

const styleApi = {
  addStyle: async (accessToken, styleData) => {
    try {
      const response = await axiosInstance.post(
        "/projects/addStyle",
        styleData,
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
  getStyles: async (accessToken, projectId) => {
    try {
      const response = await axiosInstance.post(
        `/projects/getStyles`,
        { projectId: projectId },
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
  addComponent: async (accessToken, componentData) => {
    try {
      const response = await axiosInstance.post(
        "/projects/addComponents",
        componentData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data; // Returns the added component data
    } catch (error) {
      throw new Error("Failed to add component");
    }
  },
  getComponentsByProjectId: async (accessToken, projectId) => {
    try {
      const response = await axiosInstance.get(
        `/projects/getComponents/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data; // Returns the fetched components
    } catch (error) {
      throw new Error("Failed to fetch components");
    }
  },
};

export default styleApi;
