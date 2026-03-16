import { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

function ManageServices() {

  const [services, setServices] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const [editId, setEditId] = useState(null);

  const fetchServices = async () => {

const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/services`);
    setServices(res.data);

  };

  useEffect(() => {
    fetchServices();
  }, []);

  /* ADD OR UPDATE */

  const saveService = async () => {

    if (editId) {

      await axios.put(`${import.meta.env.VITE_API_URL}/api/services/${editId}`, {
        title,
        description,
        icon
      });

      setEditId(null);

    } else {

await axios.post(`${import.meta.env.VITE_API_URL}/api/services`, {
          title,
        description,
        icon
      });

    }

    setTitle("");
    setDescription("");
    setIcon("");

    fetchServices();

  };

  /* EDIT */

  const editService = (service) => {

    setTitle(service.title);
    setDescription(service.description);
    setIcon(service.icon);

    setEditId(service._id);

  };

  /* DELETE */

  const deleteService = async (id) => {

await axios.delete(`${import.meta.env.VITE_API_URL}/api/services/${id}`);
    fetchServices();

  };

  return (

    <AdminLayout>

      <h1 className="text-3xl font-bold mb-8">
        Manage Services
      </h1>

      {/* FORM */}

      <div className="bg-white p-6 rounded shadow mb-10 space-y-3">

        <input
          className="border p-2 w-full"
          placeholder="Service Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
          className="border p-2 w-full"
          placeholder="Service Description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Service Icon (Example: 💻 🛒 ❤️)"
          value={icon}
          onChange={(e)=>setIcon(e.target.value)}
        />

        <button
          onClick={saveService}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          {editId ? "Update Service" : "Add Service"}
        </button>

      </div>

      {/* SERVICES LIST */}

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-3">Icon</th>
            <th className="p-3">Title</th>
            <th className="p-3">Description</th>
            <th className="p-3">Actions</th>

          </tr>

        </thead>

        <tbody>

          {services.map(service => (

            <tr key={service._id} className="border-t">

              <td className="p-3 text-2xl">
                {service.icon}
              </td>

              <td className="p-3">
                {service.title}
              </td>

              <td className="p-3">
                {service.description}
              </td>

              <td className="p-3 space-x-3">

                <button
                  onClick={()=>editService(service)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={()=>deleteService(service._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </AdminLayout>

  );

}

export default ManageServices;