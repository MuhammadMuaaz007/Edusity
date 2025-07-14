import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { useState } from "react";
const Navbar = () => {
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("dark-nav");
    } else {
      navbar.classList.remove("dark-nav");
    }
  });
  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className="container " id="navbar">
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu? "":"hide-mobile-menu"}>
        <li>
          <Link to="hero" duration={700} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" duration={700} smooth={true} offset={-260}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" duration={700} smooth={true} offset={-260}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" duration={700} smooth={true} offset={-260}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" duration={700} smooth={true} offset={-260}>
            Testimonials
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="contact" duration={700} smooth={true} offset={-260}>
              Contact us
            </Link>
          </button>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu_icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
