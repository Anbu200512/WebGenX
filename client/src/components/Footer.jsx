import React from "react";
import { Link } from "react-router-dom";
import {
FaEnvelope,
FaPhone,
FaMapMarkerAlt,
FaInstagram,
FaLinkedin,
FaGithub,
FaWhatsapp
} from "react-icons/fa";

function Footer() {
return (

<footer className="bg-[#0D1A63] text-white">

<div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 sm:grid-cols-2 gap-10">

{/* COMPANY */}

<div>

<h2 className="text-2xl font-bold mb-4">

<span className="text-white">Web</span>
<span className="text-[#F68048]">GenX</span>

</h2>

<p className="text-gray-300 mb-6">
We build modern websites and web applications
for startups, businesses and creators.
</p>

{/* SOCIAL MEDIA */}

<div className="flex gap-4 text-xl">

<a
href="https://instagram.com/webgen_x"
target="_blank"
rel="noreferrer"
className="hover:text-pink-400 hover:scale-110 transition"
>
<FaInstagram />
</a>

<a
href="https://wa.me/916374114513"
target="_blank"
rel="noreferrer"
className="hover:text-green-400 hover:scale-110 transition"
>
<FaWhatsapp />
</a>

</div>

</div>


{/* QUICK LINKS */}

<div>

<h3 className="text-xl font-semibold mb-4">
Quick Links
</h3>

<ul className="space-y-3 text-gray-300">

<li>
<Link className="hover:text-[#F68048] transition" to="/">Home</Link>
</li>

<li>
<Link className="hover:text-[#F68048] transition" to="/about">About</Link>
</li>

<li>
<Link className="hover:text-[#F68048] transition" to="/services">Services</Link>
</li>

<li>
<Link className="hover:text-[#F68048] transition" to="/portfolio">Portfolio</Link>
</li>

<li>
<Link className="hover:text-[#F68048] transition" to="/faq">FAQ</Link>
</li>

<li>
<Link className="hover:text-[#F68048] transition" to="/contact">Contact</Link>
</li>

</ul>

</div>


{/* SERVICES */}

<div>

<h3 className="text-xl font-semibold mb-4">
Services
</h3>

<ul className="space-y-3 text-gray-300">

<li className="hover:text-[#F68048] transition">
Website Development
</li>

<li className="hover:text-[#F68048] transition">
Web Applications
</li>

<li className="hover:text-[#F68048] transition">
UI / UX Design
</li>

<li className="hover:text-[#F68048] transition">
Website Maintenance
</li>

</ul>

</div>


{/* CONTACT */}

<div>

<h3 className="text-xl font-semibold mb-4">
Contact
</h3>

<ul className="space-y-4 text-gray-300">

<li className="flex items-center gap-3">

<FaEnvelope className="text-[#F68048]" />

<a
href="mailto:webgenx@gmail.com"
className="hover:text-[#F68048]"
>
webgenx@gmail.com
</a>

</li>

<li className="flex items-center gap-3">

<FaPhone className="text-[#F68048]" />

<a
href="tel:+916374114513"
className="hover:text-[#F68048]"
>
+91 6374114513
</a>

</li>

<li className="flex items-center gap-3">

<FaWhatsapp className="text-[#F68048]" />

<a
href="https://wa.me/916374114513"
target="_blank"
className="hover:text-green-400"
>
Chat on WhatsApp
</a>

</li>

<li className="flex items-center gap-3">

<FaMapMarkerAlt className="text-[#F68048]" />

Tamil Nadu, India

</li>

</ul>

</div>

</div>


{/* BOTTOM BAR */}

<div className="border-t border-gray-600 text-center py-4 text-gray-400 text-sm">

© {new Date().getFullYear()} 
<span className="text-white"> Web</span>
<span className="text-[#F68048]">GenX</span>. 
All Rights Reserved.

</div>

</footer>

);
}

export default Footer;