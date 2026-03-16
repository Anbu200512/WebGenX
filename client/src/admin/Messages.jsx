import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import { FaCheck, FaTrash, FaEye } from "react-icons/fa";

function Messages() {

const [messages, setMessages] = useState([]);
const [selectedMessage, setSelectedMessage] = useState(null);

const fetchMessages = async () => {

const res = await fetch(`${import.meta.env.VITE_API_URL}/api/messages`);
const data = await res.json();
setMessages(data);

};

useEffect(() => {
fetchMessages();
}, []);

const acceptMessage = async (id) => {

await fetch(`${import.meta.env.VITE_API_URL}/api/messages/accept/${id}`, {
    method: "PUT"
});

fetchMessages();

};

const deleteMessage = async (id) => {

await fetch(`${import.meta.env.VITE_API_URL}/api/messages/${id}`, {
    method: "DELETE"
});

fetchMessages();

};

return (

<AdminLayout>

<div className="p-6 md:p-10">

<h1 className="text-2xl md:text-3xl font-bold mb-8">
Client Messages
</h1>

{/* TABLE → Tablet + Desktop */}

<div className="hidden sm:block bg-white rounded-xl shadow overflow-x-auto">

<table className="min-w-full text-sm text-left">

<thead className="bg-gray-100 text-gray-600">

<tr>
<th className="px-6 py-4">Name</th>
<th className="px-6 py-4">Email</th>
<th className="px-6 py-4">Message</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Actions</th>
</tr>

</thead>

<tbody>

{messages.map((msg) => (

<tr key={msg._id} className="border-t hover:bg-gray-50">

<td className="px-6 py-4 font-semibold">
{msg.name}
</td>

<td className="px-6 py-4 text-gray-600">
{msg.email}
</td>

<td className="px-6 py-4 max-w-xs text-gray-700">

{msg.message?.length > 60
? msg.message.slice(0,60) + "..."
: msg.message}

</td>

<td className="px-6 py-4">

<span
className={`px-3 py-1 text-xs rounded-full font-semibold

${msg.status === "accepted"
? "bg-green-100 text-green-700"
: "bg-yellow-100 text-yellow-700"
}`}

>

{msg.status || "pending"}

</span>

</td>

<td className="px-6 py-4 flex gap-2">

<button
onClick={() => setSelectedMessage(msg)}
className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs"

>

<FaEye/> View </button>

<button
onClick={() => acceptMessage(msg._id)}
className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs"

>

<FaCheck/> Accept </button>

<button
onClick={() => deleteMessage(msg._id)}
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

{messages.map((msg)=>(

<div key={msg._id} className="bg-white p-4 rounded-xl shadow">

<p className="font-semibold">{msg.name}</p>

<p className="text-sm text-gray-500">
{msg.email}
</p>

<p className="text-sm mt-2 text-gray-700">
{msg.message?.length > 80
? msg.message.slice(0,80) + "..."
: msg.message}
</p>

<span
className={`inline-block mt-2 px-2 py-1 text-xs rounded font-semibold

${msg.status === "accepted"
? "bg-green-100 text-green-700"
: "bg-yellow-100 text-yellow-700"
}`}

>

{msg.status || "pending"}

</span>

<div className="flex gap-2 mt-3 flex-wrap">

<button
onClick={()=>setSelectedMessage(msg)}
className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs flex items-center gap-1"

>

<FaEye/> View </button>

<button
onClick={()=>acceptMessage(msg._id)}
className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs flex items-center gap-1"

>

<FaCheck/> Accept </button>

<button
onClick={()=>deleteMessage(msg._id)}
className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs flex items-center gap-1"

>

<FaTrash/> Delete </button>

</div>

</div>

))}

</div>

{/* MESSAGE MODAL */}

{selectedMessage && (

<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

<div className="bg-white p-6 rounded-xl shadow max-w-lg w-full">

<h2 className="text-lg font-bold mb-2">
Message from {selectedMessage.name}
</h2>

<p className="text-sm text-gray-500 mb-4">
{selectedMessage.email}
</p>

<p className="text-gray-700 whitespace-pre-wrap">
{selectedMessage.message}
</p>

<button
onClick={()=>setSelectedMessage(null)}
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

export default Messages;
