import { useFormik } from "formik";
import { UpdateSchema } from "../yup/Validation";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UpdateConfigData } from "../api/Api";
import { GenerateSuccess } from "../toast/Toast";

export const UpdateRemark = () => {
  const navigate = useNavigate();

  const initialValues = {
    configId: "",
    remark: "",
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: UpdateSchema,
    onSubmit: async (values, { resetForm }) => {
      const response = await UpdateConfigData(values.configId, values);
      if (response) {
        GenerateSuccess(response.data.message);
      }
      console.log(response);
      resetForm();
    },
  });
  return (
    <div className="h-screen text-black bg-white">
      <div className="container mx-auto px-4 max-w-screen-xl flex items-center justify-between h-full">
        <div className="m-4 w-full md:w-1/2">
          <h1 className="text-[3rem]  font-extrabold">Update Remark</h1>
          <form onSubmit={handleSubmit} className="flex flex-col mt-5">
            <div className="mb-4">
              <label htmlFor="input-field" className="block font-medium mb-2">
                Config to load (configId)
              </label>
              <input
                type="text"
                id="input-field"
                name="configId"
                value={values.configId}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-gray-500 rounded-md px-4 py-2 w-full"
              />
              {touched.configId && errors.configId && (
                <p className="pt-2 text-xs italic text-red-500">
                  {errors.configId}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="input-field" className="block font-medium mb-2">
                Remark
              </label>
              <textarea
                id="input-field"
                name="remark"
                value={values.remark}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-gray-500 rounded-md px-4 py-2 w-full"
                rows="4"
              />
              {touched.remark && errors.remark && (
                <p className="pt-2 text-xs italic text-red-500">
                  {errors.remark}
                </p>
              )}
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="flex justify-end items-center gap-2 mb-2">
            <label
              onClick={() => navigate("/")}
              htmlFor="input-field"
              className="block text-end text-blue-600 font-medium"
            >
              Click to fetch config
            </label>
            <FaArrowRight />
          </div>
        </div>
        <div className="w-1/2 lg:flex items-center justify-center hidden md:block">
          <div className="p-4">
            <img
              src="https://ouch-cdn2.icons8.com/Zz6ABya1d68dTxHdZm-wbc1Ww16FNS3F8ERE1KwZYjQ/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTAw/MC8zMDg0NGIxMy0z/ZTEzLTQ1NGEtOTE3/ZC1mYjMyOTg2NjE5/M2Quc3Zn.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
