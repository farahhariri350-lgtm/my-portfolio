import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="logo">SaulDesign</div>
      <ul className="nav-links">
        {/* التوجيه للمسارات (Routes) وليس الـ IDs */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};