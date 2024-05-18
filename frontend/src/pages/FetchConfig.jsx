import { useFormik } from "formik";
import { ConfigSchema } from "../yup/Validation";
import { useEffect, useState } from "react";
import { GetConfigData } from "../api/Api";
import { useNavigate } from "react-router-dom";

export const FetchConfig = () => {
  const [id, setid] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await GetConfigData(id);
      setData(response.data.data);
      setid("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const initialValues = {
    configId: "",
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
    validationSchema: ConfigSchema,
    onSubmit: async (values, { resetForm }) => {
      setid(values.configId);
      setData([]);
      resetForm();
    },
  });
  return (
    <div className="h-screen text-black bg-white">
      <div className="container mx-auto px-4 max-w-screen-xl flex items-center justify-between h-full">
        <div className="m-4 w-full md:w-1/2">
          <h1 className="text-[3rem]  font-extrabold">
            <span>Fetch</span> Config
          </h1>
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
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
          <p
            onClick={() => navigate("/updateremark")}
            htmlFor="input-field"
            className="block text-end text-blue-600 cursor-pointer hover:text-blue-700 font-medium"
          >
            Click to update remark
          </p>
          <h2 className="text-2xl font-bold mb-4">Result</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="col-span-1">
              <div className="bg-white rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {data.map((item) => {
                    return (
                      <div key={item.id} className="col-span-1">
                        <div className="bg-gray-300 shadow-lg p-4 rounded-lg">
                          <ul className="list-disc pl-4">
                            {Object.entries(item).map(([key, value]) => {
                              return <li key={key}>{value}</li>;
                            })}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 lg:flex items-center justify-center hidden md:block">
          <div className="p-4">
            <img
              src="https://img.freepik.com/free-photo/3d-rendering-cartoon-like-boy_23-2150797566.jpg?t=st=1716012348~exp=1716015948~hmac=1146571b5011406a069fd222cb80d8698c6ee4c5cb21c73f6c849e5f4f089e53&w=740"
              className="object-cover shadow-xl rounded-lg w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
