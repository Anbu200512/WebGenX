import { Link } from "react-router-dom";
import {
FaShoppingCart,
FaHeart,
FaBriefcase,
FaUser,
FaLaptopCode,
FaRocket,
FaCamera,
FaBuilding,
FaMobileAlt,
FaSearch,
FaLock,
FaChartLine,
FaEnvelope,
FaCreditCard,
FaWhatsapp,
FaTools
} from "react-icons/fa";

function Services() {

const services = [
{
icon: <FaShoppingCart size={34} />,
title: "E-Commerce Websites",
desc: "Online stores with product management, payments and secure checkout."
},
{
icon: <FaHeart size={34} />,
title: "Wedding / Couple Websites",
desc: "Beautiful websites for weddings and love stories."
},
{
icon: <FaBriefcase size={34} />,
title: "Business Websites",
desc: "Professional websites for companies and startups."
},
{
icon: <FaUser size={34} />,
title: "Personal Websites",
desc: "Showcase your achievements and online presence."
},
{
icon: <FaLaptopCode size={34} />,
title: "Portfolio Websites",
desc: "Modern portfolio websites for developers and designers."
},
{
icon: <FaRocket size={34} />,
title: "Startup Websites",
desc: "Landing pages built to attract customers and investors."
},
{
icon: <FaCamera size={34} />,
title: "Creative Websites",
desc: "Gallery websites for photographers and artists."
},
{
icon: <FaBuilding size={34} />,
title: "Corporate Websites",
desc: "Professional corporate websites with strong branding."
}
];

const features = [
{
icon: <FaTools size={26} />,
title: "Admin Dashboard",
desc: "Manage content, products and users easily."
},
{
icon: <FaMobileAlt size={26} />,
title: "Responsive Design",
desc: "Optimized for mobile, tablet and desktop."
},
{
icon: <FaSearch size={26} />,
title: "SEO Optimization",
desc: "Structure designed to rank better in search engines."
},
{
icon: <FaChartLine size={26} />,
title: "Analytics Integration",
desc: "Track visitors and website performance."
},
{
icon: <FaLock size={26} />,
title: "Secure Authentication",
desc: "Secure login and user management systems."
},
{
icon: <FaEnvelope size={26} />,
title: "Contact Forms",
desc: "Allow customers to easily contact your business."
},
{
icon: <FaCreditCard size={26} />,
title: "Payment Integration",
desc: "Secure online payments for e-commerce websites."
},
{
icon: <FaWhatsapp size={26} />,
title: "WhatsApp Integration",
desc: "Direct communication with customers."
}
];

return (
<div>

{/* HERO */}

<section className="relative min-h-screen flex items-center justify-center text-center text-white">

<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1551434678-e076c223a692')"
}}
></div>

<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60"></div>

<div className="relative z-10 px-6 max-w-3xl">

<h1 className="text-4xl md:text-6xl font-bold leading-tight">

<span className="text-white">Web Development</span>{" "}
<span className="text-[#F68048]">Services</span>

</h1>

<p className="mt-6 text-lg text-gray-200">
We build modern, fast, and scalable websites
that help businesses grow online.
</p>

</div>

</section>



{/* SERVICES */}

<section className="max-w-7xl mx-auto px-6 py-20">

<h2 className="text-3xl md:text-4xl font-bold text-center mb-14">

<span className="text-[#2845D6]">Websites</span>{" "}
<span className="text-[#F68048]">We Build</span>

</h2>

<div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">

{services.map((service, index) => (

<div
key={index}
className="bg-white p-8 rounded-xl shadow hover:shadow-2xl hover:-translate-y-3 transition text-center border"
>

<div className="bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 text-[#2845D6]">

{service.icon}

</div>

<h3 className="text-lg font-semibold mb-3">
{service.title}
</h3>

<p className="text-gray-600 text-sm">
{service.desc}
</p>

</div>

))}

</div>

</section>



{/* FEATURES */}

<section className="bg-gray-50 py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl md:text-4xl font-bold text-center mb-14">

<span className="text-[#2845D6]">Features</span>{" "}
<span className="text-[#F68048]">Included</span>

</h2>

<div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">

{features.map((feature, index) => (

<div
key={index}
className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition text-center border"
>

<div className="bg-orange-50 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4 text-[#F68048]">

{feature.icon}

</div>

<h3 className="font-semibold mb-2">
{feature.title}
</h3>

<p className="text-gray-600 text-sm">
{feature.desc}
</p>

</div>

))}

</div>

</div>

</section>



{/* PROCESS */}

<section className="max-w-7xl mx-auto px-6 py-20 text-center">

<h2 className="text-3xl md:text-4xl font-bold mb-12">

<span className="text-[#2845D6]">Our</span>{" "}
<span className="text-[#F68048]">Process</span>

</h2>

<div className="grid md:grid-cols-4 gap-10">

<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition border">
<h3 className="font-bold mb-2">1. Planning</h3>
<p className="text-gray-600">Understanding your requirements.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition border">
<h3 className="font-bold mb-2">2. Design</h3>
<p className="text-gray-600">Creating modern UI and UX layouts.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition border">
<h3 className="font-bold mb-2">3. Development</h3>
<p className="text-gray-600">Building fast and scalable websites.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition border">
<h3 className="font-bold mb-2">4. Launch</h3>
<p className="text-gray-600">Deploying and optimizing the website.</p>
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

export default Services;