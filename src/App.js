import { Routes, Route } from "react-router-dom";

// main css
import  "./assets/css/index.css";

// components
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from "./pages/home/Index";
import About from "./pages/about/Index";
import Services from "./pages/services/Index";

function App() {
  return (
    <>
      <Header />

      {/* pages */}
      <main>
        <Routes>
          {/* home route */}
          <Route path="/" index element={ <Home /> } />

          {/* about route */}
          <Route path="/about" element={ <About /> } />

          {/* service route */}
          <Route path="/services" element={ <Services /> } />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
