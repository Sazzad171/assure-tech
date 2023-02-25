// main css
import  "./assets/css/index.css";

// components
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from "./pages/home/Index";
// import About from "./pages/about/Index";
// import Services from "./pages/services/Index";

function App() {
  return (
    <>
      <Header />

      {/* pages */}
      <main>
        <Home />
        {/* <About /> */}
        {/* <Services /> */}
      </main>

      <Footer />
    </>
  );
}

export default App;
