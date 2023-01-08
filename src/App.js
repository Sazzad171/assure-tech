// main css
import  "./assets/css/index.css";

// components
import Header from './layout/Header';
import Footer from './layout/Footer';
import Index from "./pages/home/Index";

function App() {
  return (
    <>
      <Header />

      {/* pages */}
      <main>
        <Index />
      </main>

      <Footer />
    </>
  );
}

export default App;
