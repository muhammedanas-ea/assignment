import * as Yup from "yup";

export const ConfigSchema = Yup.object({
  configId: Yup.string()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("Please Enter configration Id"),
});

export const UpdateSchema = Yup.object({
  configId: Yup.string()
    .min(4, "Too Short!")
    .max(15, "Too Long!")
    .required("Please Enter configration Id"),
  remark: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("please Enter remark"),
});
