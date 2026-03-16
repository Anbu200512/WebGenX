import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {

const [form, setForm] = useState({
name: "",
email: "",
message: ""
});

const handleSubmit = async (e) => {

e.preventDefault();

try{

await fetch("http://localhost:5000/api/messages",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify(form)
});

alert("Message Sent Successfully!");

setForm({
name:"",
email:"",
message:""
});

}catch(err){

alert("Server error. Please try again.");

}

};

return (

<div>

{/* HERO */}

<section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center text-center text-white">

<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1524758631624-e2822e304c36')"
}}
></div>

<div className="absolute inset-0 bg-black/70"></div>

<div className="relative z-10 px-6 max-w-3xl">

<h1 className="text-3xl md:text-6xl font-bold">

<span className="text-white">Contact</span>{" "} <span className="text-[#F68048]">WebGenX</span>

</h1>

<p className="mt-4 md:mt-6 text-base md:text-lg text-gray-200">

Have a project idea? Let’s discuss how we can
build a powerful website for your business.

</p>

</div>

</section>

{/* CONTACT INTRO */}

<section className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">

<h2 className="text-2xl md:text-4xl font-bold mb-6">

<span className="text-[#2845D6]">Let's Work</span>{" "} <span className="text-[#F68048]">Together</span>

</h2>

<p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">

Whether you need a business website, portfolio,
or a custom web application, WebGenX is here
to help bring your ideas to life.

</p>

</section>

{/* CONTACT SECTION */}

<section className="max-w-6xl mx-auto px-6 pb-20">

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

{/* CONTACT FORM */}

<form
onSubmit={handleSubmit}
className="bg-white p-6 md:p-8 rounded-xl shadow-xl space-y-6 border"
>

<h3 className="text-xl md:text-2xl font-semibold mb-4">
Send a Message
</h3>

<input
type="text"
placeholder="Your Name"
className="w-full border p-3 md:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2845D6]"
value={form.name}
onChange={(e)=>setForm({...form,name:e.target.value})}
required
/>

<input
type="email"
placeholder="Your Email"
className="w-full border p-3 md:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2845D6]"
value={form.email}
onChange={(e)=>setForm({...form,email:e.target.value})}
required
/>

<textarea
placeholder="Your Message"
className="w-full border p-3 md:p-4 rounded-lg h-32 md:h-40 focus:outline-none focus:ring-2 focus:ring-[#2845D6]"
value={form.message}
onChange={(e)=>setForm({...form,message:e.target.value})}
required
></textarea>

<button
className="w-full md:w-auto bg-[#2845D6] text-white px-8 py-3 rounded-lg hover:bg-[#1A2CA3] hover:scale-105 transition"

>

Send Message </button>

</form>

{/* CONTACT INFO PANEL */}

<div className="bg-[#0D1A63] text-white p-6 md:p-8 rounded-xl shadow-xl space-y-6">

<h3 className="text-xl md:text-2xl font-semibold mb-4">
Contact Information
</h3>

<p className="text-gray-300 text-sm md:text-base">
Feel free to reach out for collaborations
or project discussions.
</p>

{/* EMAIL */}

<div className="flex items-center gap-4 border-b border-white/20 pb-4">

<div className="text-[#F68048] text-xl">
<FaEnvelope />
</div>

<div>
<p className="font-semibold">Email</p>
<p className="text-gray-300">webgenx@gmail.com</p>
</div>

</div>

{/* PHONE */}

<div className="flex items-center gap-4 border-b border-white/20 pb-4">

<div className="text-[#F68048] text-xl">
<FaPhone />
</div>

<div>
<p className="font-semibold">Phone</p>
<p className="text-gray-300">+91 XXXXX XXXXX</p>
</div>

</div>

{/* WHATSAPP */}

<a
href="https://wa.me/91XXXXXXXXXX"
target="_blank"
className="flex items-center gap-4 border-b border-white/20 pb-4 hover:text-green-400 transition"

>

<div className="text-xl">
<FaWhatsapp />
</div>

<div>
<p className="font-semibold">WhatsApp</p>
<p className="text-gray-300">Chat with us</p>
</div>

</a>

{/* INSTAGRAM */}

<a
href="https://instagram.com/webgenx"
target="_blank"
className="flex items-center gap-4 border-b border-white/20 pb-4 hover:text-pink-400 transition"

>

<div className="text-xl">
<FaInstagram />
</div>

<div>
<p className="font-semibold">Instagram</p>
<p className="text-gray-300">@webgenx</p>
</div>

</a>

{/* LOCATION */}

<div className="flex items-center gap-4">

<div className="text-[#F68048] text-xl">
<FaMapMarkerAlt />
</div>

<div>
<p className="font-semibold">Location</p>
<p className="text-gray-300">Tamil Nadu, India</p>
</div>

</div>

</div>

</div>

</section>

{/* CTA */}

<section className="max-w-7xl mx-auto px-6 py-16 md:py-20 text-center">

<div className="border rounded-xl p-8 md:p-12 hover:shadow-xl transition">

<h2 className="text-2xl md:text-4xl font-bold mb-4">

<span className="text-[#2845D6]">Ready to Build</span>{" "} <span className="text-[#F68048]">Your Website?</span>

</h2>

<p className="text-gray-600 mb-6 text-sm md:text-base">

Let WebGenX help you create a modern website.

</p>

<Link
to="/book-service"
className="inline-block bg-[#2845D6] text-white px-8 py-3 rounded-lg hover:scale-105 transition"
>
Get Start
</Link>

</div>

</section>

</div>

);

}

export default Contact;
