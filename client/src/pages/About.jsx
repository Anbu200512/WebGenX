import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiExpress } from "react-icons/si";
function About() {

const [count, setCount] = useState({
projects: 0,
clients: 0,
websites: 0,
years: 0
});

useEffect(() => {


const interval = setInterval(() => {

  setCount((prev) => ({
    projects: prev.projects < 25 ? prev.projects + 1 : 25,
    clients: prev.clients < 15 ? prev.clients + 1 : 15,
    websites: prev.websites < 20 ? prev.websites + 1 : 20,
    years: prev.years < 2 ? prev.years + 1 : 2
  }));

}, 40);

return () => clearInterval(interval);


}, []);

return (


<div>


  {/* HERO */}

  <section className="relative min-h-screen flex items-center justify-center text-center text-white">

    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
"url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80')"
      }}
    ></div>

    <div className="absolute inset-0 bg-black/60"></div>

    <div className="relative z-10 max-w-3xl px-6">

      <h1 className="text-4xl md:text-6xl font-bold">

        <span className="text-white">About</span>{" "}
        <span className="text-[#F68048]">WebGenX</span>

      </h1>

      <p className="mt-6 text-lg text-gray-200">

        Creating modern websites and digital solutions
        that help businesses grow online.

      </p>

    </div>

  </section>



  {/* OUR STORY */}

  <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

    <div>

      <h2 className="text-3xl md:text-4xl font-bold mb-6">

        <span className="text-[#2845D6]">Our</span>{" "}
        <span className="text-[#F68048]">Story</span>

      </h2>

      <p className="text-gray-600 mb-4">

        WebGenX was founded with a simple vision —
        helping businesses build a strong and modern
        digital presence.

      </p>

      <p className="text-gray-600 mb-4">

        Many small businesses and startups struggle to
        create professional websites that represent
        their brand effectively. WebGenX was created
        to solve this challenge by delivering modern,
        high-performance websites.

      </p>

      <p className="text-gray-600">

        By combining creative design, modern technology,
        and performance optimization, we build websites
        that are visually engaging, responsive and
        scalable for growing businesses.

      </p>

    </div>


    <img
      src="https://images.unsplash.com/photo-1551434678-e076c223a692"
      className="rounded-xl shadow-xl hover:scale-105 transition"
    />

  </section>


  {/* WHAT WE DO */}

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl md:text-4xl font-bold text-center mb-16">

<span className="text-[#2845D6]">What</span>{" "}
<span className="text-[#F68048]">We Do</span>

</h2>


<div className="grid md:grid-cols-3 gap-10">

<div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">

<div className="text-4xl mb-4">🌐</div>

<h3 className="font-semibold text-xl mb-3">
Website Development
</h3>

<p className="text-gray-600">
We build modern, responsive websites designed
to represent your brand and grow your business.
</p>

</div>


<div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">

<div className="text-4xl mb-4">⚙️</div>

<h3 className="font-semibold text-xl mb-3">
Web Applications
</h3>

<p className="text-gray-600">
Custom web applications that improve workflow,
productivity and business operations.
</p>

</div>


<div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">

<div className="text-4xl mb-4">🎨</div>

<h3 className="font-semibold text-xl mb-3">
UI / UX Design
</h3>

<p className="text-gray-600">
Clean, modern interface designs that improve
user experience and engagement.
</p>

</div>

</div>

</div>

</section>



  {/* MISSION & VISION */}

  <section className="py-24 bg-gray-50">

    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">

        <span className="text-[#2845D6]">Mission</span>{" "}
        <span className="text-[#F68048]">& Vision</span>

      </h2>


      <div className="grid md:grid-cols-2 gap-10">

        <div className="border-t-4 border-[#2845D6] bg-white p-10 rounded-xl hover:shadow-2xl transition">

          <h3 className="text-xl font-semibold mb-4">
            🚀 Our Mission
          </h3>

          <p className="text-gray-600">

            To empower businesses with modern digital
            solutions that improve visibility,
            engagement and growth.

          </p>

        </div>


        <div className="border-t-4 border-[#F68048] bg-white p-10 rounded-xl hover:shadow-2xl transition">

          <h3 className="text-xl font-semibold mb-4">
            🌍 Our Vision
          </h3>

          <p className="text-gray-600">

            To become a trusted digital partner for
            startups and businesses worldwide.

          </p>

        </div>

      </div>

    </div>

  </section>

  {/* OUR PROCESS */}

<section className="py-24">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-3xl md:text-4xl font-bold mb-16">

<span className="text-[#2845D6]">Our</span>{" "}
<span className="text-[#F68048]">Process</span>

</h2>


<div className="grid md:grid-cols-4 gap-10">

<div>

<div className="text-4xl mb-4">1️⃣</div>

<h3 className="font-semibold mb-2">
Understanding
</h3>

<p className="text-gray-600 text-sm">
We understand your business goals
and project requirements.
</p>

</div>


<div>

<div className="text-4xl mb-4">2️⃣</div>

<h3 className="font-semibold mb-2">
Design
</h3>

<p className="text-gray-600 text-sm">
We create modern and clean designs
focused on user experience.
</p>

</div>


<div>

<div className="text-4xl mb-4">3️⃣</div>

<h3 className="font-semibold mb-2">
Development
</h3>

<p className="text-gray-600 text-sm">
We build fast and scalable websites
using modern technologies.
</p>

</div>


<div>

<div className="text-4xl mb-4">4️⃣</div>

<h3 className="font-semibold mb-2">
Launch
</h3>

<p className="text-gray-600 text-sm">
Your website is deployed and ready
to grow your business.
</p>

</div>

</div>

</div>

</section>



  {/* STATISTICS */}

  <section className="bg-[#0D1A63] text-white py-24">

    <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl hover:scale-105 transition">

        <h2 className="text-4xl font-bold text-[#F68048]">
          {count.projects}+
        </h2>

        <p className="mt-2 text-gray-200">
          Projects Completed
        </p>

      </div>


      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl hover:scale-105 transition">

        <h2 className="text-4xl font-bold text-[#F68048]">
          {count.clients}+
        </h2>

        <p className="mt-2 text-gray-200">
          Happy Clients
        </p>

      </div>


      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl hover:scale-105 transition">

        <h2 className="text-4xl font-bold text-[#F68048]">
          {count.websites}+
        </h2>

        <p className="mt-2 text-gray-200">
          Websites Built
        </p>

      </div>


      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl hover:scale-105 transition">

        <h2 className="text-4xl font-bold text-[#F68048]">
          {count.years}+
        </h2>

        <p className="mt-2 text-gray-200">
          Years Experience
        </p>

      </div>

    </div>

  </section>



  {/* CLIENT LOGOS */}

  <section className="py-24">

    <div className="max-w-7xl mx-auto px-6 text-center">

      <h2 className="text-3xl md:text-4xl font-bold mb-12">

        <span className="text-[#2845D6]">Trusted</span>{" "}
        <span className="text-[#F68048]">Clients</span>

      </h2>


      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center opacity-70">

        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="h-10 mx-auto hover:scale-110 transition"/>

        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-10 mx-auto hover:scale-110 transition"/>

        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="h-10 mx-auto hover:scale-110 transition"/>

        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" className="h-10 mx-auto hover:scale-110 transition"/>

        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className="h-10 mx-auto hover:scale-110 transition"/>

      </div>

    </div>

  </section>



  {/* FOUNDER MESSAGE */}

  <section className="bg-gray-50 py-24">

    <div className="max-w-5xl mx-auto px-6 text-center">

      <h2 className="text-3xl md:text-4xl font-bold mb-8">

        <span className="text-[#2845D6]">Founder</span>{" "}
        <span className="text-[#F68048]">Message</span>

      </h2>


      <div className="bg-white border p-10 rounded-xl shadow hover:shadow-2xl transition">

        <p className="text-gray-600 leading-relaxed mb-6">

          WebGenX was created with a vision to help
          businesses succeed in the digital world.
          Our mission is to deliver websites that
          combine creativity, performance and
          modern technology.

        </p>

        <p className="text-gray-600 leading-relaxed">

          We believe every business deserves a
          professional online presence that
          reflects its value and helps it grow.

        </p>

        <p className="mt-6 font-semibold">
          — Anbumani, Founder of WebGenX
        </p>

      </div>

    </div>

  </section>


  {/* TECHNOLOGIES */}

{/* TECHNOLOGIES */}

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-3xl md:text-4xl font-bold mb-12">

<span className="text-[#2845D6]">Technologies</span>{" "}
<span className="text-[#F68048]">We Use</span>

</h2>


<div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">

<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">

<div className="text-blue-500 text-3xl flex justify-center mb-3">
<FaReact />
</div>

React

</div>


<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">

<div className="text-green-600 text-3xl flex justify-center mb-3">
<FaNodeJs />
</div>

Node.js

</div>


<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">

<div className="text-green-700 text-3xl flex justify-center mb-3">
<SiMongodb />
</div>

MongoDB

</div>


<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">

<div className="text-sky-500 text-3xl flex justify-center mb-3">
<SiTailwindcss />
</div>

Tailwind CSS

</div>


<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">

<div className="text-yellow-500 text-3xl flex justify-center mb-3">
<SiJavascript />
</div>

JavaScript

</div>


<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">

<div className="text-gray-700 text-3xl flex justify-center mb-3">
<SiExpress />
</div>

Express.js

</div>


<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">

<div className="text-orange-600 text-3xl flex justify-center mb-3">
<FaGitAlt />
</div>

Git

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

export default About;
