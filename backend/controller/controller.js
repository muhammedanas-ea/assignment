import { Configuration } from "../model/ConfigurationModel.js";

export const ConfigurationData = async (req, res) => {
  try {
    const result = await Configuration.findOne({ configId: req.params.id });
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json({ message: "Configuration id not found" });
    }
  } catch (err) {
    console.log(err);
  }
};

export const UpdateConfigurationData = async (req, res) => {
  try {
    const { configId, remark } = req.body;
    const CheckConfigId = await Configuration.exists({ configId: configId });
    if (CheckConfigId) {
      const updatedData = await Configuration.updateOne(
        { configId: configId },
        { $set: { remark: remark } }
      );
      if (updatedData) {
        return res.status(200).json({ message: "success" });
      }
      return res.status(400).json({ message: "update not completed" });
    } else {
      return res.status(400).json({ message: "configId is incorrect" });
    }
  } catch (err) {
    console.log(err);
  }
};
