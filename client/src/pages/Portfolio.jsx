import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
FaBriefcase,
FaShoppingCart,
FaLaptopCode,
FaRocket,
FaPaintBrush,
FaBolt,
FaCogs,
FaReact,
FaNodeJs
} from "react-icons/fa";

import { SiMongodb, SiTailwindcss } from "react-icons/si";

function Portfolio() {

const [projects, setProjects] = useState([]);

useEffect(() => {

fetch("http://localhost:5000/api/portfolio")
.then((res) => res.json())
.then((data) => setProjects(data))
.catch((err) => console.log(err));

}, []);

return (

<div>

{/* HERO */}

<section className="relative min-h-screen flex items-center justify-center text-white text-center">

<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')"
}}
></div>

<div className="absolute inset-0 bg-black/70"></div>

<div className="relative z-10 px-6 max-w-3xl">

<h1 className="text-4xl md:text-6xl font-bold">

<span className="text-white">Our</span>{" "}
<span className="text-[#F68048]">Portfolio</span>

</h1>

<p className="mt-6 text-lg text-gray-200">

Discover the digital experiences and modern websites
we have built for businesses and creators.

</p>

</div>

</section>



{/* ABOUT OUR WORK */}

<section className="max-w-6xl mx-auto px-6 py-20 text-center">

<h2 className="text-3xl md:text-4xl font-bold mb-6">

<span className="text-[#2845D6]">Our Work</span>{" "}
<span className="text-[#F68048]">Speaks</span>

</h2>

<p className="text-gray-600 max-w-3xl mx-auto">

At WebGenX, we create websites that combine design,
performance, and user experience. From startups to
businesses, our portfolio showcases projects that
help brands grow online.

</p>

</section>



{/* PORTFOLIO CATEGORIES */}

<section className="bg-gray-50 py-20">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-3xl md:text-4xl font-bold mb-12">

<span className="text-[#2845D6]">Website</span>{" "}
<span className="text-[#F68048]">Categories</span>

</h2>

<div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">

<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition text-center">

<div className="text-[#2845D6] text-3xl mb-3 flex justify-center">
<FaBriefcase />
</div>

Business Websites

</div>


<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition text-center">

<div className="text-[#2845D6] text-3xl mb-3 flex justify-center">
<FaShoppingCart />
</div>

E-commerce Websites

</div>


<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition text-center">

<div className="text-[#2845D6] text-3xl mb-3 flex justify-center">
<FaLaptopCode />
</div>

Portfolio Websites

</div>


<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition text-center">

<div className="text-[#2845D6] text-3xl mb-3 flex justify-center">
<FaRocket />
</div>

Startup Landing Pages

</div>

</div>

</div>

</section>



{/* PROJECTS GRID */}

<section className="max-w-7xl mx-auto px-6 py-20">

<h2 className="text-3xl md:text-4xl font-bold text-center mb-14">

<span className="text-[#2845D6]">Featured</span>{" "}
<span className="text-[#F68048]">Projects</span>

</h2>

<div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">

{projects.map((project) => (

<div
key={project._id}
className="bg-white rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition overflow-hidden border"
>

<img
src={project.image}
alt={project.title}
className="w-full h-52 object-cover"
/>

<div className="p-6">

<h3 className="text-lg font-semibold mb-2">
{project.title}
</h3>

<p className="text-gray-600 text-sm mb-4">
{project.description}
</p>

<a
href={project.link}
target="_blank"
rel="noreferrer"
className="text-[#2845D6] font-semibold hover:text-[#F68048] transition"
>
Visit Website →
</a>

</div>

</div>

))}

</div>

</section>



{/* WHY OUR WORK STANDS OUT */}

<section className="bg-gray-50 py-20">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-3xl md:text-4xl font-bold mb-12">

<span className="text-[#2845D6]">Why Our</span>{" "}
<span className="text-[#F68048]">Work Stands Out</span>

</h2>

<div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">

<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center">

<div className="text-[#F68048] text-3xl mb-3 flex justify-center">
<FaPaintBrush />
</div>

<h3 className="font-semibold mb-2">
Modern Design
</h3>

<p className="text-gray-600 text-sm">
Clean and modern UI design focused on user experience.
</p>

</div>


<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center">

<div className="text-[#F68048] text-3xl mb-3 flex justify-center">
<FaBolt />
</div>

<h3 className="font-semibold mb-2">
Fast Performance
</h3>

<p className="text-gray-600 text-sm">
Optimized websites for speed and smooth performance.
</p>

</div>


<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center">

<div className="text-[#F68048] text-3xl mb-3 flex justify-center">
<FaCogs />
</div>

<h3 className="font-semibold mb-2">
Scalable Technology
</h3>

<p className="text-gray-600 text-sm">
Built using modern technologies like React and Node.
</p>

</div>

</div>

</div>

</section>



{/* TECHNOLOGIES */}

<section className="py-20">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-3xl md:text-4xl font-bold mb-10">

<span className="text-[#2845D6]">Technologies</span>{" "}
<span className="text-[#F68048]">We Use</span>

</h2>

<div className="flex flex-wrap justify-center gap-10 text-lg font-medium">

<div className="flex items-center gap-2">
<FaReact className="text-blue-500 text-2xl"/> React
</div>

<div className="flex items-center gap-2">
<FaNodeJs className="text-green-600 text-2xl"/> Node.js
</div>

<div className="flex items-center gap-2">
<SiMongodb className="text-green-700 text-2xl"/> MongoDB
</div>

<div className="flex items-center gap-2">
<SiTailwindcss className="text-sky-500 text-2xl"/> Tailwind CSS
</div>

</div>

</div>

</section>



{/* CTA */}

<section className="max-w-7xl mx-auto px-6 py-20 text-center">

<div className="border rounded-xl p-12 hover:shadow-xl transition">

<h2 className="text-4xl font-bold mb-4">

<span className="text-[#2845D6]">Ready to Build</span>{" "}
<span className="text-[#F68048]">Your Website?</span>

</h2>

<p className="text-gray-600 mb-6">

Let WebGenX help you create a modern website.

</p>

<Link
to="/contact"
className="bg-[#2845D6] text-white px-8 py-3 rounded-lg hover:bg-[#1A2CA3] hover:scale-105 transition"
>
Contact Us
</Link>

</div>

</section>

</div>

);

}

export default Portfolio;