import { useState, useEffect } from "react";
import AdminLayout from "./AdminLayout";
import { FaEdit, FaTrash } from "react-icons/fa";

function ManagePortfolio() {

const [projects, setProjects] = useState([]);

const [form, setForm] = useState({
title: "",
description: "",
image: "",
link: "",
category: ""
});

const [editingId, setEditingId] = useState(null);

const fetchProjects = async () => {

const res = await fetch("http://localhost:5000/api/portfolio");
const data = await res.json();
setProjects(data);

};

useEffect(() => {
fetchProjects();
}, []);

const handleSubmit = async (e) => {

e.preventDefault();

if (editingId) {

await fetch(`http://localhost:5000/api/portfolio/${editingId}`, {
method: "PUT",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(form)
});

} else {

await fetch("http://localhost:5000/api/portfolio", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(form)
});

}

setForm({
title: "",
description: "",
image: "",
link: "",
category: ""
});

setEditingId(null);

fetchProjects();

};

const deleteProject = async (id) => {

await fetch(`http://localhost:5000/api/portfolio/${id}`, {
method: "DELETE"
});

fetchProjects();

};

const editProject = (project) => {

setForm({
title: project.title,
description: project.description,
image: project.image,
link: project.link,
category: project.category
});

setEditingId(project._id);

};

return (

<AdminLayout>

<div className="p-6 md:p-10">

<h1 className="text-3xl font-bold mb-8">
Manage Portfolio
</h1>

{/* FORM CARD */}

<div className="bg-white rounded-xl shadow-lg p-6 mb-10">

<h2 className="text-xl font-semibold mb-6">
{editingId ? "Edit Project" : "Add New Project"}
</h2>

<form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">

<input
type="text"
placeholder="Project Title"
className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
value={form.title}
onChange={(e)=>setForm({...form,title:e.target.value})}
required
/>

<input
type="text"
placeholder="Category"
className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
value={form.category}
onChange={(e)=>setForm({...form,category:e.target.value})}
required
/>

<input
type="text"
placeholder="Image URL"
className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
value={form.image}
onChange={(e)=>setForm({...form,image:e.target.value})}
required
/>

<input
type="text"
placeholder="Website Link"
className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
value={form.link}
onChange={(e)=>setForm({...form,link:e.target.value})}
/>

<textarea
placeholder="Description"
className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
value={form.description}
onChange={(e)=>setForm({...form,description:e.target.value})}
required
></textarea>

<button
className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg md:col-span-2 transition"

>

{editingId ? "Update Project" : "Add Project"}

</button>

</form>

</div>

{/* PROJECT GRID */}

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

{projects.map((p)=> (

<div key={p._id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

<img
src={p.image}
alt={p.title}
className="h-44 w-full object-cover hover:scale-105 transition duration-300"
/>

<div className="p-4">

<div className="flex justify-between items-center mb-2">

<h3 className="font-semibold text-lg">
{p.title}
</h3>

<span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
{p.category}
</span>

</div>

<p className="text-sm text-gray-600 mb-4">
{p.description}
</p>

<div className="flex gap-3">

<button
onClick={()=>editProject(p)}
className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition"

>

<FaEdit/>
Edit

</button>

<button
onClick={()=>deleteProject(p._id)}
className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"

>

<FaTrash/>
Delete

</button>

</div>

</div>

</div>

))}

</div>

</div>

</AdminLayout>

);

}

export default ManagePortfolio;
