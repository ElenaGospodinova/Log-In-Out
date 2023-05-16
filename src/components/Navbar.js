import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "../styles/Navbar.css";


export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Your Mucis World 
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/LogIn">LogIn</CustomLink>
        <CustomLink to="/LogOut">LogOut</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}