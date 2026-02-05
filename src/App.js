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
      {/* السكشن الأول: الهيرو */}
      <Hero />
      
      {/* السكشن الثاني: الأباوت */}
      <About /> 
      
      {/* السكشن الثالث: المشاريع */}
      <Projects />

      {/* السكشن الرابع: التواصل - سيظهر في أسفل الصفحة */}
      <Contact /> 
      <Footer/>
    </div>
  );
}

export default App;