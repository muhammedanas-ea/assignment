import { useFormik } from "formik";
import { ConfigSchema } from "../yup/Validation";
import { useEffect, useState } from "react";
import { ConfigData } from "../api/Api";

export const FetchConfig = () => {
  const [id, setid] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await ConfigData(id);
      console.log(response);
      setData(response.data.data);
      setid('')
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
    onSubmit: async (values,{ resetForm}) => {
      setid(values.configId);
      resetForm();
    },
  });
  return (
    <div className="h-screen text-black bg-white">
      <div className="container mx-auto px-4 max-w-screen-xl flex items-center justify-between h-full">
        <div className="m-4 w-1/2">
          <h1 className="text-[3rem]  font-extrabold">
            <span>Fetch</span> Config
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col mt-5">
            <div className="mb-4">
              <label htmlFor="input-field" className="block font-medium mb-2">
                Config to load (configId):
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
            <label htmlFor="input-field" className="block text-end text-blue-600 font-medium mb-2">
                Click to update remark
              </label>
          </form>
          <div className="grid grid-cols-4 gap-4 mt-7 w-full">
            {data.map((item) => {
              return (
                <div key={item.id} className="flex gap-2 items-center">
                  {Object.entries(item).map(([key, value]) => {
                    return (
                      <p key={key} className="uppercase text-lg">
                        {value}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/2 h-full lg:flex items-center justify-center hidden ">
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
