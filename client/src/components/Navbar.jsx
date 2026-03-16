import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);
const [darkMode, setDarkMode] = useState(false);

const toggleTheme = () => {

setDarkMode(!darkMode);

if(!darkMode){
document.documentElement.classList.add("dark");
}else{
document.documentElement.classList.remove("dark");
}

};
return (

<nav className="bg-[#0D1A63] text-white sticky top-0 z-50 shadow-md">

<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

{/* LOGO */}

<Link to="/" className="text-2xl font-bold">

<span className="text-white">Web</span>
<span className="text-[#F68048]">GenX</span>

</Link>


{/* DESKTOP MENU */}

<ul className="hidden md:flex gap-8 text-lg items-center">

<li>
<Link to="/" className="hover:text-[#F68048] transition">
Home
</Link>
</li>

<li>
<Link to="/about" className="hover:text-[#F68048] transition">
About
</Link>
</li>

<li>
<Link to="/services" className="hover:text-[#F68048] transition">
Services
</Link>
</li>

<li>
<Link to="/portfolio" className="hover:text-[#F68048] transition">
Portfolio
</Link>
</li>

<li>
<Link to="/faq" className="hover:text-[#F68048] transition">
FAQ
</Link>
</li>

<li>
<Link to="/contact" className="hover:text-[#F68048] transition">
Contact
</Link>
</li>

</ul>


{/* RIGHT SIDE OPTIONS */}

<div className="hidden md:flex items-center gap-4">

{/* BOOK SERVICE */}

<Link
to="/book-service"
className="bg-[#F68048] px-4 py-2 rounded-lg hover:scale-105 transition"
>
Book Service
</Link>


{/* LOGIN */}

<Link
to="/login"
className="border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
>
Login
</Link>


{/* DARK MODE */}

<button
onClick={toggleTheme}
className="text-xl hover:text-[#F68048]"
>
{darkMode ? <FaSun /> : <FaMoon />}
</button>


{/* PROFILE ICON */}

{/* <Link to="/login">

<img
src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
alt="profile"
className="w-8 h-8 hover:scale-110 transition"
/>

</Link> */}

</div>


{/* MOBILE MENU BUTTON */}

<button
className="md:hidden text-2xl"
onClick={() => setMenuOpen(!menuOpen)}
>
☰
</button>

</div>



{/* MOBILE MENU */}

{menuOpen && (

<div className="md:hidden bg-[#1A2CA3]">

<ul className="flex flex-col items-center gap-6 py-6 text-lg">

<Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#F68048]">
Home
</Link>

<Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#F68048]">
About
</Link>

<Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-[#F68048]">
Services
</Link>

<Link to="/portfolio" onClick={() => setMenuOpen(false)} className="hover:text-[#F68048]">
Portfolio
</Link>

<Link to="/faq" onClick={() => setMenuOpen(false)} className="hover:text-[#F68048]">
FAQ
</Link>

<Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#F68048]">
Contact
</Link>

<Link to="/login" onClick={() => setMenuOpen(false)} className="hover:text-[#F68048]">
Login
</Link>

<Link
to="/book-service"
onClick={() => setMenuOpen(false)}
className="bg-[#F68048] px-4 py-2 rounded-lg"
>
Book Service
</Link>

<button
onClick={toggleTheme}
className="text-xl"
>
{darkMode ? <FaSun /> : <FaMoon />}
</button>

</ul>

</div>

)}

</nav>

);

}

export default Navbar;