import axiosInterceptorInstance from "../utils/Middleware";

const api = axiosInterceptorInstance;

export const GetConfigData  = async (id) => {
  try {
    return await api.get(`/configurations/${id}`);
  } catch (err) {
    throw new err(err);
  }
};

export const UpdateConfigData = async (id,remark) => {
  try{
    return await api.put(`/configurations/${id}`,remark)
  }catch(err){
    throw new err(err)
  }
}