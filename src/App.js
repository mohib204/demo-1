import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/navbar/nav'
// import Footer from './components/footer/fo';
import Home from "./component/pages/Home/home";
import About from "./component/pages/about/about";
import Owner from './component/pages/owner/owner'
import SomeStoveIknowAbout from "./component/pages/somestoveiknowabout/somestoveiknowabout";
import Drop1 from './component/pages/drop1/dr';
import Drop2 from './component/pages/drop2/dro';
import Somenews from "./component/pages/somenews/somenews";
import Footer from "./component/footer/footer";

function App() {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/src/component/pages/owner/owner.js" element={<Owner/>} /> {/* Fixed route path */}
        <Route path="/src/component/pages/somestoveiknowabout/somestoveiknowabout.js" element={<SomeStoveIknowAbout />} /> {/* Changed route to avoid conflict */}
        <Route path="/src/component/pages/drop1/dr.js" element={<Drop1/>} /> {/* Changed route to avoid conflict */}
        <Route path="/src/component/pages/drop2/dro.js" element={<Drop2 />} /> {/* Changed route to avoid conflict */}
        <Route path="/somenews" element={<Somenews />} /> {/* Changed route to avoid conflict */}
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
