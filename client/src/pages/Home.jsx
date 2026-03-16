import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
<div>

{/* HERO SECTION */}

<section className="relative min-h-screen flex items-center justify-center text-center text-white">

<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')"
}}
></div>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10 max-w-3xl px-6">

<h1 className="text-4xl md:text-6xl font-bold leading-tight">

Build Powerful Websites With
<span className="text-[#F68048]"> WebGenX</span>

</h1>

<p className="mt-6 text-lg text-gray-200">

We design and develop modern websites that help
businesses grow their digital presence.

</p>

<div className="mt-8 flex justify-center gap-4 flex-wrap">

<Link
to="/book-service"
className="bg-[#F68048] px-6 py-3 rounded-lg hover:scale-105 transition"
>
Start a Project
</Link>

<Link
to="/portfolio"
className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
>
View Portfolio
</Link>

</div>

</div>

</section>


{/* ABOUT PREVIEW */}

<section className="max-w-7xl mx-auto px-6 py-20">

<div className="grid md:grid-cols-2 gap-12 items-center">

<div>

<h2 className="text-4xl font-bold mb-6">
<span className="text-[#2845D6]">About</span>{" "}
<span className="text-[#F68048]">WebGenX</span>
</h2>

<p className="text-gray-600 mb-4">

WebGenX builds modern, scalable websites for startups,
businesses and creators.

</p>

<p className="text-gray-600">

Our goal is to help brands create powerful digital
experiences and grow their presence online.

</p>

<Link
to="/about"
className="inline-block mt-6 bg-[#2845D6] text-white px-6 py-3 rounded-lg hover:scale-105 transition"
>
View More About →
</Link>

</div>


<div className="grid grid-cols-2 gap-6">

<div className="border-l-4 border-[#2845D6] bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
⚡ Fast Websites
</div>

<div className="border-l-4 border-[#F68048] bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
📱 Responsive Design
</div>

<div className="border-l-4 border-[#2845D6] bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
🚀 Modern Technologies
</div>

<div className="border-l-4 border-[#F68048] bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
🎨 Clean UI
</div>

</div>

</div>

</section>


{/* WHY CHOOSE WEBGENX */}

<section className="bg-gray-50 py-20">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

{/* IMAGE */}

<div>

<img
src="https://images.unsplash.com/photo-1552664730-d307ca884978"
className="rounded-xl shadow-lg"
/>

</div>


{/* CONTENT */}

<div>

<h2 className="text-4xl font-bold mb-6">

<span className="text-[#2845D6]">Why Choose</span>{" "}
<span className="text-[#F68048]">WebGenX</span>

</h2>

<p className="text-gray-600 mb-6">

At WebGenX, we focus on building powerful websites that
help businesses grow online. Our team combines modern
technology with creative design to deliver high-quality
digital experiences.

</p>

<div className="space-y-4">

<div className="flex gap-3">
<span className="text-[#F68048] text-xl">✔</span>
<p>Modern technologies like React, Node and Tailwind</p>
</div>

<div className="flex gap-3">
<span className="text-[#F68048] text-xl">✔</span>
<p>Fully responsive design for all devices</p>
</div>

<div className="flex gap-3">
<span className="text-[#F68048] text-xl">✔</span>
<p>Fast loading and SEO optimized websites</p>
</div>

<div className="flex gap-3">
<span className="text-[#F68048] text-xl">✔</span>
<p>Clean UI / UX focused on user experience</p>
</div>

</div>

</div>

</div>

</section>


{/* SERVICES */}

<section className="py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center">

<span className="text-[#2845D6]">Our</span>{" "}
<span className="text-[#F68048]">Services</span>

</h2>


{/* VIEW MORE SERVICES LINK */}

<div className="text-center mt-3 mb-12">

<Link
to="/services"
className="text-[#2845D6] font-semibold hover:underline"
>
View More Services →
</Link>

</div>


<div className="grid md:grid-cols-3 gap-8">

<div className="border-t-4 border-[#2845D6] bg-white rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition">

<div className="text-4xl mb-4">🌐</div>

<h3 className="font-semibold text-xl mb-3">
Website Development
</h3>

<p className="text-gray-600">
Modern responsive websites for businesses.
</p>

</div>


<div className="border-t-4 border-[#F68048] bg-white rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition">

<div className="text-4xl mb-4">⚙️</div>

<h3 className="font-semibold text-xl mb-3">
Web Applications
</h3>

<p className="text-gray-600">
Custom applications designed for business growth.
</p>

</div>


<div className="border-t-4 border-[#2845D6] bg-white rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition">

<div className="text-4xl mb-4">🎨</div>

<h3 className="font-semibold text-xl mb-3">
UI / UX Design
</h3>

<p className="text-gray-600">
Clean and modern user experience design.
</p>

</div>

</div>

</div>

</section>


{/* FEATURED PROJECTS */}

<section className="max-w-7xl mx-auto px-6 py-20">

<h2 className="text-4xl font-bold text-center">

<span className="text-[#2845D6]">Featured</span>{" "}
<span className="text-[#F68048]">Projects</span>

</h2>

<div className="text-center mt-3">

<Link
to="/portfolio"
className="text-[#2845D6] font-semibold hover:underline"
>
View Full Portfolio →
</Link>

</div>


<div className="grid md:grid-cols-3 gap-8 mt-12">

{/* PROJECT 1 */}

<div className="border rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer">

<div className="overflow-hidden">

<img
src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
className="w-full h-52 object-cover hover:scale-110 transition duration-300"
/>

</div>

<div className="p-6">

<h3 className="font-semibold text-lg">
Car Rental Platform
</h3>

<p className="text-gray-600 text-sm mt-1">
Modern car rental booking website.
</p>

<a
href="https://car-rental-dealership.vercel.app/"
target="_blank"
rel="noreferrer"
className="inline-block mt-3 text-[#2845D6] font-semibold hover:text-[#F68048] transition"
>
Visit Website →
</a>

</div>

</div>


{/* PROJECT 2 */}

<div className="border rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer">

<div className="overflow-hidden">

<img
src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
className="w-full h-52 object-cover hover:scale-110 transition duration-300"
/>

</div>

<div className="p-6">

<h3 className="font-semibold text-lg">
Pavishna Pannai Service
</h3>

<p className="text-gray-600 text-sm mt-1">
Farm services booking platform 👍
</p>

<a
href="https://pavishna-pannai-service.vercel.app/"
target="_blank"
rel="noreferrer"
className="inline-block mt-3 text-[#2845D6] font-semibold hover:text-[#F68048] transition"
>
Visit Website →
</a>

</div>

</div>


{/* PROJECT 3 */}

<div className="border rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer">

<div className="overflow-hidden">

<img
src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
className="w-full h-52 object-cover hover:scale-110 transition duration-300"
/>

</div>

<div className="p-6">

<h3 className="font-semibold text-lg">
Personal Portfolio
</h3>

<p className="text-gray-600 text-sm mt-1">
Professional developer portfolio website.
</p>

<a
href="https://anbumani-portfolio.vercel.app/"
target="_blank"
rel="noreferrer"
className="inline-block mt-3 text-[#2845D6] font-semibold hover:text-[#F68048] transition"
>
Visit Website →
</a>

</div>

</div>

</div>

</section>


{/* CLIENT TESTIMONIALS */}

<section className="bg-gray-50 py-20">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold mb-12">

<span className="text-[#2845D6]">Client</span>{" "}
<span className="text-[#F68048]">Testimonials</span>

</h2>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">

<div className="text-[#F68048] mb-3">★★★★★</div>

<p className="text-gray-600">
WebGenX delivered a professional website that
greatly improved our online presence.
</p>

<h4 className="mt-6 font-semibold">
Startup Founder
</h4>

</div>


<div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">

<div className="text-[#F68048] mb-3">★★★★★</div>

<p className="text-gray-600">
The design and performance exceeded our expectations.
Highly recommended.
</p>

<h4 className="mt-6 font-semibold">
Business Owner
</h4>

</div>


<div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">

<div className="text-[#F68048] mb-3">★★★★★</div>

<p className="text-gray-600">
Working with WebGenX was smooth and professional.
The final result was excellent.
</p>

<h4 className="mt-6 font-semibold">
Entrepreneur
</h4>

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
className="bg-[#2845D6] text-white px-8 py-3 rounded-lg hover:scale-105 transition"
>
Contact Us
</Link>

</div>

</section>

</div>
);
}

export default Home;