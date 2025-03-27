import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Rows } from "lucide-react";
import styles from "../Styles/header.module.css";
import logo from "../Assets/logo.png";
import { Col, Row } from "antd";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Row className={`container ${styles.container}`} justify={"space-between"}>
        {/* Logo */}
       <Col xl={7}>
       <Link to="/" className={styles.logo}>
          <img alt="PawSpace Logo" src={logo} className={styles.logoImg} />
        </Link></Col>

        {/* Desktop Navigation */}
       <Col xl={10}>
       <nav className={styles.desktopNav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/about" className={styles.navLink}>About Us</Link>
          <Link to="/services" className={styles.navLink}>Services</Link>

          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </nav></Col>

        {/* Phone Number and Book Now */}
       <Col xl={7}> <div className={styles.desktopActions}>
          <div className={styles.phoneNumber}>
            <Phone className={styles.phoneIcon} />
            <a href="tel:+919911203330" className={styles.phoneLink}>+91 9911203330</a>
          </div>
          <Link to="/contact" className={`button button-primary ${styles.bookButton}`}>Book Now</Link>
        </div></Col>

        {/* Mobile Menu Button */}
        <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Row>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className={styles.mobileNav}>
          <Link to="/" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/services" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/about" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/services" className={`button button-primary ${styles.mobileBookButton}`} onClick={() => setIsMenuOpen(false)}>Book Now</Link>
        </nav>
      )}
    </header>
  );
}