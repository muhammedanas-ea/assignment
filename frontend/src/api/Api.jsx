import axiosInterceptorInstance from "../utils/Middleware";

const api = axiosInterceptorInstance;

export const ConfigData = async (id) => {
  try {
    const data = await api.get(`/configurations/${id}`);
    return data;
  } catch (err) {
    throw new err(err);
  }
};
