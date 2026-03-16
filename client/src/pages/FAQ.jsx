import { useState } from "react";
import { Link } from "react-router-dom";

function FAQ() {

const faqs = [
{
question: "What services does WebGenX provide?",
answer:
"WebGenX provides modern web development services including business websites, portfolio websites, e-commerce platforms, startup landing pages, and custom web applications."
},

{
question: "Who are your services for?",
answer:
"Our services are designed for startups, small businesses, entrepreneurs, creators, and professionals who want a modern online presence."
},

{
question: "Do you build custom websites?",
answer:
"Yes. Every website we build is custom designed based on your business needs, branding, and functionality requirements."
},

{
question: "How long does it take to build a website?",
answer:
"The timeline depends on the complexity of the project. Simple websites take 3–5 days, business websites take around 1–2 weeks, and web applications may take 2–4 weeks."
},

{
question: "Will my website be mobile responsive?",
answer:
"Yes. All websites built by WebGenX are fully responsive and optimized for mobile, tablet, and desktop devices."
},

{
question: "How much does a website cost?",
answer:
"The cost depends on your project requirements and features. After understanding your needs, we provide a custom quote."
},

{
question: "Do you offer website maintenance?",
answer:
"Yes. WebGenX provides website maintenance and support to ensure your website stays secure, updated, and optimized."
},

{
question: "What technologies do you use?",
answer:
"We use modern technologies including React, Node.js, MongoDB, Express, HTML, CSS, JavaScript, and Tailwind CSS."
},

{
question: "Will my website be SEO optimized?",
answer:
"Yes. We follow SEO best practices including optimized structure, fast performance, and mobile responsiveness."
},

{
question: "How can I contact WebGenX?",
answer:
"You can contact us through our Contact page or email us to discuss your project requirements."
}
];

const [active, setActive] = useState(null);

const toggle = (index) => {
setActive(active === index ? null : index);
};

return (

<div>

{/* HERO */}

<section className="relative min-h-screen flex items-center justify-center text-center text-white">

<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1557804506-669a67965ba0')"
}}
></div>

<div className="absolute inset-0 bg-black/70"></div>

<div className="relative z-10 px-6 max-w-3xl">

<h1 className="text-4xl md:text-6xl font-bold">

<span className="text-white">Frequently Asked</span>{" "}
<span className="text-[#F68048]">Questions</span>

</h1>

<p className="mt-6 text-lg text-gray-200">

Find answers to common questions about WebGenX
services, pricing, and website development.

</p>

</div>

</section>



{/* FAQ SECTION */}

<section className="max-w-4xl mx-auto px-6 py-20">

<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">

<span className="text-[#2845D6]">Common</span>{" "}
<span className="text-[#F68048]">Questions</span>

</h2>

<div className="space-y-4">

{faqs.map((faq, index) => (

<div
key={index}
className="border rounded-xl overflow-hidden"
>

<button
onClick={() => toggle(index)}
className="w-full text-left p-5 flex justify-between items-center font-semibold hover:bg-gray-50 transition"
>

{faq.question}

<span className="text-[#2845D6] text-xl">
{active === index ? "-" : "+"}
</span>

</button>

{active === index && (

<div className="p-5 text-gray-600 border-t">
{faq.answer}
</div>

)}

</div>

))}

</div>

</section>



{/* CTA */}

<section className="max-w-7xl mx-auto px-6 py-20 text-center">

<div className="border rounded-xl p-12 hover:shadow-xl transition">

<h2 className="text-4xl font-bold mb-4">

<span className="text-[#2845D6]">Still Have</span>{" "}
<span className="text-[#F68048]">Questions?</span>

</h2>

<p className="text-gray-600 mb-6">

Contact WebGenX and we’ll help you with your project.

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

export default FAQ;