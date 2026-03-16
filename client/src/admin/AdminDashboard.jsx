import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import {
FaServicestack,
FaImages,
FaUsers,
FaEnvelope
} from "react-icons/fa";

function AdminDashboard(){

const [stats,setStats] = useState({
services:0,
portfolio:0,
users:0,
messages:0
});

useEffect(()=>{

const fetchStats = async()=>{

try{

const services = await fetch("http://localhost:5000/api/services");
const portfolio = await fetch("http://localhost:5000/api/portfolio");
const users = await fetch("http://localhost:5000/api/users");
const messages = await fetch("http://localhost:5000/api/messages");

const servicesData = await services.json();
const portfolioData = await portfolio.json();
const usersData = await users.json();
const messagesData = await messages.json();

setStats({
services:servicesData.length || 0,
portfolio:portfolioData.length || 0,
users:usersData.length || 0,
messages:messagesData.length || 0
});

}catch(err){
console.log(err);
}

};

fetchStats();

},[]);

return(

<AdminLayout>

<div className="p-6 md:p-10">

<h1 className="text-2xl md:text-3xl font-bold mb-8">
Admin Dashboard
</h1>

{/* STATS GRID */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

{/* SERVICES */}

<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-center justify-between">

<div>
<p className="text-gray-500 text-sm">
Total Services
</p>

<p className="text-2xl font-bold">
{stats.services}
</p>
</div>

<div className="text-blue-600 text-3xl">
<FaServicestack/>
</div>

</div>

{/* PORTFOLIO */}

<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-center justify-between">

<div>
<p className="text-gray-500 text-sm">
Portfolio Projects
</p>

<p className="text-2xl font-bold">
{stats.portfolio}
</p>
</div>

<div className="text-purple-600 text-3xl">
<FaImages/>
</div>

</div>

{/* USERS */}

<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-center justify-between">

<div>
<p className="text-gray-500 text-sm">
Users
</p>

<p className="text-2xl font-bold">
{stats.users}
</p>
</div>

<div className="text-green-600 text-3xl">
<FaUsers/>
</div>

</div>

{/* MESSAGES */}

<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-center justify-between">

<div>
<p className="text-gray-500 text-sm">
Messages
</p>

<p className="text-2xl font-bold">
{stats.messages}
</p>
</div>

<div className="text-orange-600 text-3xl">
<FaEnvelope/>
</div>

</div>

</div>

{/* QUICK INFO SECTION */}

<div className="mt-10 grid md:grid-cols-2 gap-6">

<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-lg font-semibold mb-3">
Welcome Admin
</h2>

<p className="text-gray-600 text-sm leading-relaxed">
This dashboard allows you to manage WebGenX services,
portfolio projects, user messages and client service requests.
Use the sidebar to navigate between different admin sections.
</p>

</div>

<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-lg font-semibold mb-3">
Quick Tips
</h2>

<ul className="text-sm text-gray-600 space-y-2">

<li>• Accept new client service requests</li>
<li>• Manage portfolio projects</li>
<li>• Monitor user messages</li>
<li>• Update services anytime</li>

</ul>

</div>

</div>

</div>

</AdminLayout>

);

}

export default AdminDashboard;
