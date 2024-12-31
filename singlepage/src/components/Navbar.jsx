import './Navbar.css'
function Navbar() {
    return(
        <>
        <nav className="navbar">
  <a href="#" className="navbar-brand">
  Visite Places
  </a>
  <span className="menu-toggle" onclick="toggleMenu()">
    ☰
  </span>
  <ul className="navbar-links">
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#shop">Shop</a>
    </li>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ul>
</nav>

        </>
    )
}
export default Navbar