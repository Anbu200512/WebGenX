import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

function Login() {

const navigate = useNavigate();

const [form,setForm] = useState({
email:"",
password:""
});

const [loading,setLoading] = useState(false);

const handleSubmit = async (e)=>{

e.preventDefault();

setLoading(true);

try{

const res = await fetch("http://localhost:5000/api/auth/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(form)
});

const data = await res.json();

if(data.success && data.role === "admin"){

localStorage.setItem("admin","true");

navigate("/admin/dashboard");

}else{

alert("Invalid Credentials");

}

}catch(err){

alert("Server error. Please try again.");

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
"url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80')"
}}
></div>

{/* OVERLAY */}

<div className="absolute inset-0 bg-gradient-to-br from-[#0D1A63]/90 via-black/80 to-black/90"></div>

{/* LOGIN CARD */}

<div className="relative z-10 w-full max-w-md">

<h2 className="text-4xl font-bold text-center mb-10 text-white">

<span className="text-white">Login</span>{" "} <span className="text-[#F68048]">WebGenX</span>

</h2>

<div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">

<form onSubmit={handleSubmit} className="space-y-5">

<input
type="email"
placeholder="Email Address"
className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#F68048] outline-none"
value={form.email}
onChange={(e)=>setForm({...form,email:e.target.value})}
required
/>

<input
type="password"
placeholder="Password"
className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#F68048] outline-none"
value={form.password}
onChange={(e)=>setForm({...form,password:e.target.value})}
required
/>

<button
disabled={loading}
className="w-full bg-[#F68048] hover:bg-[#ff7d45] text-white py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-xl disabled:opacity-60"

>

{loading ? "Logging in..." : "Login"}

</button>

</form>

{/* GOOGLE LOGIN */}

<button className="w-full mt-4 border border-white/20 text-white py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-white/10 transition">

<FaGoogle className="text-red-500"/>

Login with Google

</button>

{/* SIGNUP LINK */}

<p className="text-center mt-6 text-sm text-gray-300">

Don't have an account?{" "}

<Link to="/signup" className="text-[#F68048] font-semibold">
Sign Up
</Link>

</p>

</div>

</div>

</div>

);

}

export default Login;
