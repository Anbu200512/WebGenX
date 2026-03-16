import { useState } from "react";

function BookService() {

const [form,setForm] = useState({
name:"",
email:"",
phone:"",
websiteType:"",
budget:"",
timeline:"",
description:""
});

const [loading,setLoading] = useState(false);
const [message,setMessage] = useState("");

const handleSubmit = async(e)=>{

e.preventDefault();
setLoading(true);
setMessage("");

try{

const res = await fetch(`${import.meta.env.VITE_API_URL}/api/service-requests`,{
    method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(form)
});

const data = await res.json();

if(res.ok){

setMessage("✅ Service Request Submitted Successfully!");

setForm({
name:"",
email:"",
phone:"",
websiteType:"",
budget:"",
timeline:"",
description:""
});

}else{

setMessage(data.error || "❌ Failed to submit request");

}

}catch(err){

setMessage("⚠️ Server error. Please try again.");

}

setLoading(false);

};

return(

<div className="relative min-h-screen flex items-center justify-center px-6 py-20">

{/* BACKGROUND */}

<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=80')"
}}
></div>

{/* OVERLAY */}

<div className="absolute inset-0 bg-gradient-to-br from-[#0D1A63]/90 via-black/80 to-black/90"></div>

{/* FORM WRAPPER */}

<div className="relative z-10 w-full max-w-3xl">

<h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">

<span className="text-white">Book</span>{" "}
<span className="text-[#F68048]">Service</span>

</h2>

<form
onSubmit={handleSubmit}
className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 space-y-6"
>

{/* NAME */}

<input
type="text"
placeholder="Your Name"
className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#F68048] outline-none"
value={form.name}
onChange={(e)=>setForm({...form,name:e.target.value})}
required
/>

{/* EMAIL */}

<input
type="email"
placeholder="Email Address"
className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#F68048] outline-none"
value={form.email}
onChange={(e)=>setForm({...form,email:e.target.value})}
required
/>

{/* PHONE */}

<input
type="text"
placeholder="Phone Number"
className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#F68048] outline-none"
value={form.phone}
onChange={(e)=>setForm({...form,phone:e.target.value})}
/>

{/* WEBSITE TYPE */}

<select
className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-[#F68048] outline-none"
value={form.websiteType}
onChange={(e)=>setForm({...form,websiteType:e.target.value})}
required
>

<option value="" className="text-black bg-white">
Select Website Type
</option>

<option className="text-black bg-white">
Business Website
</option>

<option className="text-black bg-white">
E-commerce Website
</option>

<option className="text-black bg-white">
Portfolio Website
</option>

<option className="text-black bg-white">
Startup Landing Page
</option>

<option className="text-black bg-white">
Blog Website
</option>

<option className="text-black bg-white">
Custom Web Application
</option>

</select>

{/* BUDGET */}

<select
className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-[#F68048] outline-none"
value={form.budget}
onChange={(e)=>setForm({...form,budget:e.target.value})}
>

<option value="" className="text-black bg-white">
Estimated Budget
</option>

<option className="text-black bg-white">
₹5k - ₹10k
</option>

<option className="text-black bg-white">
₹10k - ₹25k
</option>

<option className="text-black bg-white">
₹25k - ₹50k
</option>

</select>

{/* TIMELINE */}

<select
className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-[#F68048] outline-none"
value={form.timeline}
onChange={(e)=>setForm({...form,timeline:e.target.value})}
>

<option value="" className="text-black bg-white">
Project Timeline
</option>

<option className="text-black bg-white">
1 Week
</option>

<option className="text-black bg-white">
2 Weeks
</option>

<option className="text-black bg-white">
1 Month
</option>

</select>

{/* DESCRIPTION */}

<textarea
placeholder="Project Details"
className="w-full p-3 rounded-lg h-32 bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#F68048] outline-none"
value={form.description}
onChange={(e)=>setForm({...form,description:e.target.value})}
/>

{/* MESSAGE */}

{message && (
<p className="text-center text-sm text-white">
{message}
</p>
)}

{/* BUTTON */}

<button
type="submit"
disabled={loading}
className="w-full bg-[#F68048] hover:bg-[#ff7d45] text-white py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-xl disabled:opacity-60"
>

{loading ? "Submitting..." : "Submit Request"}

</button>

</form>

</div>

</div>

);

}

export default BookService;