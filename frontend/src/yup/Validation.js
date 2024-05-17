import * as Yup from "yup";

export const ConfigSchema = Yup.object({
  configId: Yup.string()
    .min(4, "Too Short!")
    .max(15, "Too Long!")
    .required("Please Enter configration Id"),
});
