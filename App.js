import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import './App.css';
import homeImage from './assets/home.jpg';
import doctorImage from './assets/doctor.jpg';
import greenerImage from './assets/greener.jpg';
import nanoImage from './assets/nano.jpg';
import aiImage from './assets/ai.png';
import quoteImage from './assets/quote.jpg';
import c1Image from './assets/c1.png';
import c2Image from './assets/c2.png';
import c3Image from './assets/c3.png';


import AboutUs from './components/AboutUs';
import TimeLine from './components/TimeLine';


const Home = () => {
  const navigate = useNavigate();

  const researchCards = [
    {
      image: greenerImage,
      title: "Sustainable Polymers for a Greener Future",
      description: "Exploring bio-based materials for reducing plastic waste and enhancing sustainability."
    },
    {
      image: nanoImage,
      title: "Nanotechnology in Medicine",
      description: "Investigating how nanoscale materials can revolutionize drug delivery and diagnostics."
    },
    {
      image: aiImage,
      title: "Artificial Intelligence in Chemical Analysis",
      description: "Using AI-driven models to predict chemical reactions and optimize synthesis pathways."
    }
  ];

  const testimonials = [
    {
      img: c1Image,
      text: `"Dr.Prasanga Mantilaka has been a game-changer in sustainable chemistry research. His/her passion and knowledge inspire the next generation of scientists."`,
      name: "Shakthi Aravinda",
    },
    {
      img: c2Image,
      text: `"Dr.Prasanga Mantilaka has been a game-changer in sustainable chemistry research. His/her passion and knowledge inspire the next generation of scientists."`,
      name: "Dulaj Perera",
    },
    {
      img: c3Image,
      text: `"Dr.Prasanga Mantilaka has been a game-changer in sustainable chemistry research. His/her passion and knowledge inspire the next generation of scientists."`,
      name: "Nimasha Fernando",
    },
  ];

  const buttonStyle = {
    width: '223px',
    height: '52px',
    borderRadius: '26px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    fontSize: '24px',
    backgroundColor: 'hsla(201, 100%, 31%, 1)',
    color: 'hsla(200, 26%, 93%, 1.00)',
    border: 'none',
    opacity: 1
  };

  const smallButtonStyle = {
    width: '155px',
    height: '41px',
    borderRadius: '26px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    fontSize: '20px',
    backgroundColor: 'hsla(201, 100%, 31%, 1)',
    color: 'hsla(180, 9%, 98%, 1.00)',
    border: 'none',
  };

  const navButtons = [
    { name: "About Us", path: "/about" },
    { name: "Publications", path: "/publications" },
    { name: "Time Line", path: "/timeline" },
    { name: "Patents & Innovations", path: "/patents" },
    { name: "Services", path: "/services" },
    { name: "Startups & Products", path: "/startups" },
    { name: "Courses & Videos", path: "/courses" },
    { name: "News & Events", path: "/news" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <div>

      <div 
        className="position-relative"
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
        }}
      >
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(270deg, hsla(0, 0%, 100%, 0.05) 0%, hsla(202, 76%, 65%, 0.84) 100%)'
          }}
        />

        <nav className="navbar navbar-expand-lg py-3 position-relative z-1 w-100" style={{height: '57px', opacity: 1}}>
          <div className="container-fluid d-flex justify-content-between align-items-center px-4">
            <span 
              className="navbar-brand fw-bold" 
              style={{
                fontSize: '20px', 
                fontFamily: 'Montserrat, sans-serif', 
                fontWeight: 500, 
                color: 'hsla(201, 100%, 18%, 1)',
                cursor: 'pointer'
              }}
              onClick={() => navigate('/')}
            >
              Logo
            </span>
            <div className="d-flex flex-row align-items-center">
              {navButtons.map((button, index) => (
                <button 
                  key={index} 
                  className="btn btn-link mx-2 fw-bold border-0 text-decoration-none p-0"
                  style={{
                    fontFamily: 'Montserrat, sans-serif', 
                    fontWeight: 500, 
                    fontSize: '16px', 
                    color: 'hsla(201, 100%, 18%, 1)', 
                    whiteSpace: 'nowrap'
                  }}
                  onClick={() => navigate(button.path)}
                >
                  {button.name}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <section className="position-relative z-1 d-flex align-items-center" style={{minHeight: 'calc(110vh - 110px)'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6" style={{marginLeft: '8px'}}>
                <h1 className="mb-4" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '36px', color: 'hsla(201, 100%, 18%, 1)', margin: 0}}>
                  Innovating the Future of Chemistry
                </h1>
                <p className="mb-5" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '24px', color: 'hsla(201, 100%, 31%, 1)', margin: 0}}>
                  Exploring groundbreaking research <br /> and chemical innovations for a better <br />tomorrow.
                </p>
                <button style={buttonStyle}>Innovations</button>
              </div>
            </div>
          </div>
        </section>
      </div>

   
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold mb-4" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '36px', color: 'hsla(201, 100%, 31%, 1)', lineHeight: '1.2'}}>
                Welcome to the Official Website of Dr. Prasanga Mantilaka
              </h2>
              <p className="mb-4" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '18px', lineHeight: '1.6', color: '#000000'}}>
                Dr. Prasanga Mantilaka! A world-leading Senior Scientist, innovator, and educator. Dr. Mantilaka is renowned for his pioneering contributions to Nanotechnology and Materials Science. Recognized among the top 7% of researchers globally, his groundbreaking work has transformed industries and inspired countless professionals. With over 19 patents (including seven international patents) and more than 50 publications in high-impact journals, Dr. Mantilaka's work has redefined how science can bridge the gap between academia and industry. Explore this space to discover the achievements, innovations, and services he offers to individuals and industries.
              </p>
              <button 
                className="btn px-4 py-2" 
                style={buttonStyle}
                onClick={() => navigate('/about')}
              >
                About Us
              </button>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="bg-white p-2 rounded mx-auto" style={{width: '100%', maxWidth: '469px', height: '400px', backgroundColor: 'hsla(0, 0%, 85%, 1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={doctorImage} alt="Dr. Prasanga Mantilaka" className="img-fluid w-100 h-100 rounded" style={{objectFit: 'cover'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{color: 'hsla(201, 100%, 31%, 1)', fontSize: '2.5rem'}}>
            Latest Research & Discoveries
          </h2>
          <div className="row g-4">
            {researchCards.map((card, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-lg" style={{backgroundColor: 'hsla(202, 100%, 88%, 1)', transition: 'transform 0.3s ease', cursor: 'pointer'}}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <img src={card.image} className="card-img-top" alt={card.title} style={{height: '250px', objectFit: 'cover', width: '100%'}} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold" style={{fontSize: '1.3rem', marginBottom: '1rem'}}>{card.title}</h5>
                    <p className="card-text flex-grow-1" style={{fontSize: '1rem', lineHeight: '1.6'}}>{card.description}</p>
                    <button className="btn mt-auto align-self-start" style={smallButtonStyle}>More Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 position-relative" style={{backgroundImage: `url(${quoteImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: 'hsla(201, 100%, 31%, 0.6)'}} />
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <div className="mb-4 fw-bold" style={{fontSize: '2.15rem', color: 'hsla(0, 0%, 100%, 1)'}}>
                "Science and everyday life cannot and should <br></br>not be separated." – Rosalind Franklin
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section className="py-5 bg-white" style={{ width: '100%' }}>
        <h2 className="fw-bold mb-5 text-center" style={{ color: 'hsla(201, 100%, 31%, 1)', fontSize: '2rem' }}>
          What Our Clients Say
        </h2>
        <div className="d-flex flex-column align-items-center w-100 position-relative">
          {testimonials.map((client, index) => {
            const alignLeft = index % 2 === 0;
            const cardWidth = index === 1 ? 866 : 861;
            const cardHeight = index === 1 ? 248 : 217;

            return (
              <div key={index} style={{width: '85%', display: 'flex', justifyContent: alignLeft ? 'flex-start' : 'flex-end', marginBottom: '30px'}}>
                <div className="card border-0 shadow-sm d-flex flex-row align-items-center" style={{width: `${cardWidth}px`, height: `${cardHeight}px`, borderRadius: '20px', padding: '20px'}}>
                  <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left', fontFamily: 'Montserrat, sans-serif'}}>
                    <p style={{fontWeight: 500, fontSize: '18px', lineHeight: '1.3', color: '#090101ff', marginBottom: '10px'}}>
                      {client.text}
                    </p>
                    <h6 style={{fontWeight: 600, fontSize: '18px', color: 'hsla(201, 83%, 5%, 1.00)'}}>
                      {client.name}
                    </h6>
                  </div>
                  <img src={client.img} alt={`Client ${index + 1}`} style={{height: '100%', width: 'auto', objectFit: 'contain', borderRadius: '12px', flexShrink: 0, marginLeft: '20px'}} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

    
      <footer className="py-5 text-white position-relative" style={{backgroundImage: `url(${nanoImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: 'hsla(201, 100%, 31%, 1)'}} />
        <div className="container position-relative z-1">
          <div className="row justify-content-between">
            <div className="col-lg-4 mb-4">
              <span 
                className="fw-bold fs-3 d-block mb-3"
                style={{cursor: 'pointer'}}
                onClick={() => navigate('/')}
              >
                LOGO
              </span>
              <p className="mb-4">
                Advancing the future of chemistry through research, innovation, and education. Explore groundbreaking discoveries and learn with expert-led courses.
              </p>
              <div className="d-flex gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5"><FaFacebookF /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5"><FaLinkedinIn /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5"><FaInstagram /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5"><FaYoutube /></a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Our Company</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button 
                    className="btn btn-link text-white p-0 text-decoration-none"
                    onClick={() => navigate('/about')}
                  >
                    About Us
                  </button>
                </li>
                <li className="mb-2"><button className="btn btn-link text-white p-0 text-decoration-none">Research Works</button></li>
                <li className="mb-2"><button className="btn btn-link text-white p-0 text-decoration-none">Innovations</button></li>
                <li className="mb-2"><button className="btn btn-link text-white p-0 text-decoration-none">Courses & Videos</button></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Get In Touch</h5>
              <div className="d-flex align-items-center mb-2">
                <FaMapMarkerAlt className="me-2" style={{fontSize: '16px'}} />
                <p className="mb-0">No,100 Mosque Bridge Road, Kandy</p>
              </div>
              <div className="d-flex align-items-center mb-2">
                <FaPhone className="me-2" style={{fontSize: '16px'}} />
                <p className="mb-0">071 0533 733</p>
              </div>
              <div className="d-flex align-items-center mb-2">
                <FaPhone className="me-2" style={{fontSize: '16px'}} />
                <p className="mb-0">071 0533 733</p>
              </div>
              <div className="d-flex align-items-center">
                <FaEnvelope className="me-2" style={{fontSize: '16px'}} />
                <p className="mb-0">info.hasun.yz</p>
              </div>
            </div>
          </div>
          <div className="text-center pt-4 mt-3 border-top border-secondary">
            <p className="mb-0">copyright &copy; 2025 All rights reserved to xyzht</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/timeline" element={<TimeLine />} />

        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
