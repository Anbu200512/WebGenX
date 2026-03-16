import Service from "../models/Service.js";

/* GET SERVICES */

export const getServices = async (req, res) => {

  const services = await Service.find();

  res.json(services);

};


/* CREATE SERVICE */

export const createService = async (req, res) => {

  const service = new Service(req.body);

  await service.save();

  res.json(service);

};


/* UPDATE SERVICE */

export const updateService = async (req, res) => {

  const service = await Service.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(service);

};


/* DELETE SERVICE */

export const deleteService = async (req, res) => {

  await Service.findByIdAndDelete(req.params.id);

  res.json({ message: "Service deleted" });

};