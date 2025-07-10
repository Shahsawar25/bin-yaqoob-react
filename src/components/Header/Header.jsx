import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import playIcon from "../../assets/play.png";
import pauseIcon from "../../assets/pause.png";


const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.muted = false;
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

    useEffect(() => {
   
    if (menuOpen) {
      document.body.classList.add("lock-scroll");
    } else {
      document.body.classList.remove("lock-scroll");
    }
  }, [menuOpen]);



  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className={`navbar ${menuOpen ? "expanded" : ""}`}>
        <div className="logo ">
          <img
            src="https://binyaqoobgroup.com.pk/images/-51f.png"
            alt="BIN YAQOOB GROUP"
          />
          <span className="menu-icon-text" onClick={toggleMenu}>
  {menuOpen ? "✖" : "☰"}
</span>
        </div>
        <ul  className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>

          <li className="dropdown">
            <a className="dropbtn" href="#">
              Projects
            </a>
            <div className="dropdown-content">
              <a href="#">Ongoing Projects</a>
              <hr />
              <a href="#">Upcoming Projects</a>
              <hr />
              <a href="#">completed Projects</a>
              <hr />
            </div>
          </li>

          {/* Gallery */}
          <li className="dropdown">
            <a className="dropbtn" href="#">
              Gallery
            </a>
            <div className="dropdown-content">
              <a href="#">Bin Yaqoob Arcade</a>
              <hr />
              <a href="#">Bin Yaqoob valley</a>
              <hr />
              <a href="#">corporate Services</a>
              <hr />
              <a href="#">Salam Tower</a>
              <hr />
              <a href="#">All</a>
              <hr />
            </div>
          </li>

          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#" className="contact-us">
              Contact Us
            </a>
          </li>
        </ul>
      </header>

      <div className="video-container">
        <video
          ref={videoRef}
          id="mainVideo"
          src="https://binyaqoobgroup.com.pk/bin.mp4"
          autoplay
          loop
        ></video>
        <img
          src={isPlaying ? pauseIcon : playIcon}
          className="play-icon"
          onClick={toggleVideo}
          alt="play/pause"
        />
      </div>
    </div>
  );
};

export default Header;
