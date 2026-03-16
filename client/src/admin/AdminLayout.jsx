import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import {
FaTachometerAlt,
FaServicestack,
FaImages,
FaUsers,
FaEnvelope,
FaClipboardList,
FaBars,
FaTimes
} from "react-icons/fa";

function AdminLayout({ children }) {

const navigate = useNavigate();
const location = useLocation();
const [sidebarOpen,setSidebarOpen] = useState(false);

/* LOGOUT */

const handleLogout = () => {
localStorage.removeItem("admin");
navigate("/login");
};

/* MENU */

const menu = [
{ name:"Dashboard", path:"/admin/dashboard", icon:<FaTachometerAlt/> },
{ name:"Services", path:"/admin/services", icon:<FaServicestack/> },
{ name:"Portfolio", path:"/admin/portfolio", icon:<FaImages/> },
{ name:"Users", path:"/admin/users", icon:<FaUsers/> },
{ name:"Service Requests", path:"/admin/serviceRequests", icon:<FaClipboardList/> },
{ name:"Messages", path:"/admin/messages", icon:<FaEnvelope/> }
];

return (

<div className="h-screen bg-gray-100">

{/* MOBILE TOPBAR */}

<div className="lg:hidden fixed top-0 left-0 right-0 bg-[#0D1A63] text-white flex items-center justify-between p-4 z-50">

<h2 className="font-bold text-lg">WebGenX</h2>

<button onClick={()=>setSidebarOpen(true)}> <FaBars size={20}/> </button>

</div>

{/* OVERLAY */}

{sidebarOpen && (

<div
className="fixed inset-0 bg-black/40 z-40 lg:hidden"
onClick={()=>setSidebarOpen(false)}
></div>
)}

{/* SIDEBAR */}

<div className={`
fixed top-0 left-0 h-screen w-64 bg-[#0D1A63] text-white flex flex-col justify-between z-50
transform transition-transform duration-300

${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
`}>

<div>

{/* HEADER */}

<div className="p-6 border-b border-[#1A2CA3] flex items-center justify-between">

<div>
<h2 className="text-2xl font-bold">WebGenX</h2>
<p className="text-sm text-gray-300">Admin Panel</p>
</div>

<button
className="lg:hidden"
onClick={()=>setSidebarOpen(false)}

>

<FaTimes/>
</button>

</div>

{/* MENU */}

<ul className="p-4 space-y-2">

{menu.map((item,index)=>{

const active = location.pathname === item.path;

return(

<li key={index}>

<Link
to={item.path}
onClick={()=>setSidebarOpen(false)}
className={`flex items-center gap-3 p-3 rounded-lg transition

${active
? "bg-[#1A2CA3]"
: "hover:bg-[#1A2CA3]/70"
}`}

>

<span className="text-lg">{item.icon}</span>

<span>{item.name}</span>

</Link>

</li>

);

})}

</ul>

</div>

{/* LOGOUT */}

<div className="p-4 border-t border-[#1A2CA3]">

<button
onClick={handleLogout}
className="w-full bg-[#F68048] hover:bg-[#ff784f] transition p-2 rounded-lg font-semibold"

>

Logout

</button>

</div>

</div>

{/* CONTENT AREA */}

<div className="h-screen overflow-y-auto lg:ml-64 mt-16 lg:mt-0 p-6 md:p-8 lg:p-10">

{children}

</div>

</div>

);

}

export default AdminLayout;
