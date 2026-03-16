import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import { FaCheck, FaTrash, FaEye } from "react-icons/fa";

function ServiceRequests(){

const [requests,setRequests] = useState([]);
const [selectedRequest,setSelectedRequest] = useState(null);

const fetchRequests = ()=>{

fetch(`${import.meta.env.VITE_API_URL}/api/service-requests`)
.then(res=>res.json())
.then(data=>setRequests(data));

};

useEffect(()=>{
fetchRequests();
},[]);

const acceptRequest = async(id)=>{

await fetch(`${import.meta.env.VITE_API_URL}/api/service-requests/${id}/accept`,{
    method:"PUT"
});

fetchRequests();

};

const deleteRequest = async(id)=>{

await fetch(`${import.meta.env.VITE_API_URL}/api/service-requests/${id}`,{
    method:"DELETE"
});

fetchRequests();

};

return(

<AdminLayout>

<div className="p-6 md:p-10">

<h1 className="text-2xl md:text-3xl font-bold mb-8">
Service Requests
</h1>

{/* TABLE → Tablet + Desktop */}

<div className="hidden sm:block bg-white rounded-xl shadow overflow-x-auto">

<table className="min-w-full text-sm text-left">

<thead className="bg-gray-100 text-gray-600">

<tr>
<th className="px-6 py-4">Name</th>
<th className="px-6 py-4">Email</th>
<th className="px-6 py-4">Website</th>
<th className="px-6 py-4">Budget</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Actions</th>
</tr>

</thead>

<tbody>

{requests.map((r)=>(

<tr key={r._id} className="border-t hover:bg-gray-50">

<td className="px-6 py-4 font-semibold">
{r.name}
</td>

<td className="px-6 py-4 text-gray-600">
{r.email}
</td>

<td className="px-6 py-4">
{r.websiteType || "-"}
</td>

<td className="px-6 py-4">
{r.budget || "-"}
</td>

<td className="px-6 py-4">

<span className={`px-3 py-1 text-xs rounded-full font-semibold

${r.status==="Accepted"
? "bg-green-100 text-green-700"
: "bg-yellow-100 text-yellow-700"
}`}>

{r.status || "Pending"}

</span>

</td>

<td className="px-6 py-4 flex gap-2">

<button
onClick={()=>setSelectedRequest(r)}
className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs"

>

<FaEye/> View </button>

<button
onClick={()=>acceptRequest(r._id)}
className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs"

>

<FaCheck/> Accept </button>

<button
onClick={()=>deleteRequest(r._id)}
className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"

>

<FaTrash/> Delete </button>

</td>

</tr>

))}

</tbody>

</table>

</div>

{/* MOBILE CARDS */}

<div className="grid gap-4 sm:hidden">

{requests.map((r)=>(

<div key={r._id} className="bg-white p-4 rounded-xl shadow">

<p className="font-semibold">{r.name}</p>

<p className="text-sm text-gray-500">
{r.email}
</p>

<p className="text-sm mt-2">
Website: {r.websiteType || "-"}
</p>

<p className="text-sm">
Budget: {r.budget || "-"}
</p>

<span className={`inline-block mt-2 px-2 py-1 text-xs rounded font-semibold

${r.status==="Accepted"
? "bg-green-100 text-green-700"
: "bg-yellow-100 text-yellow-700"
}`}>

{r.status || "Pending"}

</span>

<div className="flex gap-2 mt-3 flex-wrap">

<button
onClick={()=>setSelectedRequest(r)}
className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs flex items-center gap-1"

>

<FaEye/> View </button>

<button
onClick={()=>acceptRequest(r._id)}
className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs flex items-center gap-1"

>

<FaCheck/> Accept </button>

<button
onClick={()=>deleteRequest(r._id)}
className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs flex items-center gap-1"

>

<FaTrash/> Delete </button>

</div>

</div>

))}

</div>

{/* REQUEST MODAL */}

{selectedRequest && (

<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

<div className="bg-white p-6 rounded-xl shadow max-w-lg w-full">

<h2 className="text-lg font-bold mb-2">
Request from {selectedRequest.name}
</h2>

<p className="text-sm text-gray-500 mb-4">
{selectedRequest.email}
</p>

<p className="text-gray-700">
Website Type: {selectedRequest.websiteType}
</p>

<p className="text-gray-700">
Budget: {selectedRequest.budget}
</p>

<p className="text-gray-700 mb-4">
Timeline: {selectedRequest.timeline}
</p>

<p className="text-gray-700 whitespace-pre-wrap">
{selectedRequest.description}
</p>

<button
onClick={()=>setSelectedRequest(null)}
className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"

>

Close </button>

</div>

</div>

)}

</div>

</AdminLayout>

);

}

export default ServiceRequests;
