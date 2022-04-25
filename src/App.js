import { useState } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  const [navSelected, setNavSelected] = useState('about');

  const currentPage = () => {
    if (navSelected === 'about') {
      return <About></About>;
    } else if (navSelected === "portfolio") {
      return <Portfolio></Portfolio>;
    } else if (navSelected === "contact") {
      return <Contact></Contact>;
    } else {
      return <Resume></Resume>;
    }
  }

  return (
    <div>
      <Header
        navSelected={navSelected}
        setNavSelected={setNavSelected}
      ></Header>
      <main>
        { currentPage() }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
