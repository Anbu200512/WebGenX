import Portfolio from "../models/Portfolio.js";

// GET all projects
export const getPortfolio = async (req, res) => {

try {


const projects = await Portfolio.find().sort({ createdAt: -1 });

res.json(projects);

} catch (error) {


res.status(500).json({ error: error.message });


}

};

// ADD project
export const createPortfolio = async (req, res) => {

try {


const project = new Portfolio(req.body);

const saved = await project.save();

res.json(saved);


} catch (error) {


res.status(500).json({ error: error.message });

}

};

// UPDATE project
export const updatePortfolio = async (req, res) => {

try {


const updatedProject = await Portfolio.findByIdAndUpdate(
  req.params.id,
  req.body,
  { new: true }
);

res.json(updatedProject);


} catch (error) {


res.status(500).json({ error: error.message });


}

};

// DELETE project
export const deletePortfolio = async (req, res) => {

try {


await Portfolio.findByIdAndDelete(req.params.id);

res.json({ message: "Project deleted" });


} catch (error) {


res.status(500).json({ error: error.message });


}

};
