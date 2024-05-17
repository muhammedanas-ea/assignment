import { Configuration } from "../model/ConfigurationModel.js";

export const ConfigurationData = async (req, res) => {
  try {
    const result = await Configuration.findOne({ configId: req.params.id });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(400).json({ message: "Configuration id not found" });
    }
  } catch (err) {
    console.log(err);
  }
};

export const UpdateConfigurationData = async (req, res) => {
  try {
    // const updatedData = await Configuration.updateOne({configId: req.params.id },{$set:{}})
  } catch (err) {
    console.log(err);
  }
};
