import express from "express";
import { ConfigurationData, UpdateConfigurationData } from "../controller/controller.js";
const Routes = express.Router();

Routes.get("/configurations/:id", ConfigurationData);
Routes.put("/configurations/:id", UpdateConfigurationData);

export default Routes;
