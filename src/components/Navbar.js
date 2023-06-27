import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import '../styles/Navbar.css';
import elly from '../img/elly.jpeg';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      
      <img src={elly} alt='My Logo' style={{ margin:'30px', width: '60px', height: '60px', borderRadius:'12px'}} className='logo' />
      Your Music World
      </Link>
      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="hamburger"></div>
      </div>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/LogIn">LogIn</CustomLink>
        <CustomLink to="/LogOut">LogOut</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}