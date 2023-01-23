// main css
import  "./assets/css/index.css";

// components
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from "./pages/home/Index";

function App() {
  return (
    <>
      <Header />

      {/* pages */}
      <main>
        <Home />
      </main>

      <Footer />
    </>
  );
}

export default App;
