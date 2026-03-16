import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
/* Public Pages */

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import BookService from "./pages/BookService";

/* Auth Pages */

import Login from "./auth/Login";
import Signup from "./auth/Signup";

/* Admin Pages */

import AdminDashboard from "./admin/AdminDashboard";
import ManageServices from "./admin/ManageServices";
import ManagePortfolio from "./admin/ManagePortfolio";
import ManageUsers from "./admin/ManageUsers";
import Messages from "./admin/Messages";
import AdminProtected from "./admin/AdminProtected";
import ServiceRequests from "./admin/ServiceRequests";  

function AppContent() {

const location = useLocation();

/* Hide layout only for admin */

const hideLayout = location.pathname.startsWith("/admin");

return (

<>
{/* Navbar */}

{!hideLayout && <Navbar />}

<Routes>

{/* PUBLIC ROUTES */}

<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/portfolio" element={<Portfolio />} />
<Route path="/faq" element={<FAQ />} />
<Route path="/contact" element={<Contact />} />
<Route path="/book-service" element={<BookService />} />

{/* AUTH ROUTES */}

<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />

{/* ADMIN ROUTES (PROTECTED) */}

<Route
path="/admin/dashboard"
element={
<AdminProtected>
<AdminDashboard />
</AdminProtected>
}
/>

<Route
path="/admin/services"
element={
<AdminProtected>
<ManageServices />
</AdminProtected>
}
/>

<Route
path="/admin/portfolio"
element={
<AdminProtected>
<ManagePortfolio />
</AdminProtected>
}
/>

<Route
path="/admin/users"
element={
<AdminProtected>
<ManageUsers />
</AdminProtected>
}
/>

<Route
path="/admin/ServiceRequests"
element={
<AdminProtected>
<ServiceRequests />
</AdminProtected>
}
/>

<Route
path="/admin/messages"
element={
<AdminProtected>
<Messages />
</AdminProtected>
}
/>

</Routes>

{/* Footer */}

{!hideLayout && <Footer />}

</>
);
}

function App() {

return (

<BrowserRouter>
<ScrollToTop />
<AppContent />
</BrowserRouter>

);

}

export default App;