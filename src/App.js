// src/App.jsx
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact'
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <Hero />
      
    
      <About /> 
      

      <Projects />

   
      <Contact /> 
      <Footer/>
    </div>
  );
}

export default App;