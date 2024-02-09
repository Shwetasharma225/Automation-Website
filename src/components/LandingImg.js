import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './App.css'; // Import CSS file for styles
// Import SVG file

function LandingPg() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
return (
    <div className="App">
        <nav>
            <div className="logo" >
                <h1>eMD-Portal</h1>
            </div>
             <ul>
               <li><Link to="/signin">Sign In</Link></li>

            </ul>

        </nav>
      <header className="App-header">

        
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h2 class="title-font sm:text-4xl text-3xl mb-4 font-small" style={{color:'white'}}>Embrace the Future of CME Management 
      </h2>
      <h2 style={{fontSize:'4rem', fontWeight:'bolder', color:'white', display:'flex'}}>Effortlessly Manage Your Continuing Medical Education</h2>
      </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={require('../components/—Pngtree—flat wind blue doctor reception_5861560.png')}/>
    </div>
  </div>
</section>
      </header>
      <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item >
            <div className="carousel-item-wrapper" style={{ width: "100%" }}>
              <img
                className="d-block slide-in-image"
                src={require('../components/20945078.jpg')}
                alt="First slide"
                style={{height:'100%', justifyContent:'center', display:'flex'}}
              />
              <Carousel.Caption className="carousel-caption fadeInUp">
                <h3 style={{fontWeight:'bolder', fontSize:'45px'}}>Are you tired of the email excavation for CME certificates and receipts</h3>
                
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-wrapper" >
              <img
                className="d-block slide-in-image"
                src={require('../components/depressed-businessman-isolated.jpg')}
                alt="Second slide"
                style={{height:'100%', justifyContent:'center', display:'flex'}}
              />
              <Carousel.Caption className="carousel-caption fadeInUp">
                <h3 style={{fontWeight:'bolder', fontSize:'45px'}}>Lost in the labyrinth of CME tracking for license renewal?</h3>
                
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-wrapper" style={{ width: "100%" }}>
              <img
                className="d-block slide-in-image"
                src={require('../components/5209447.jpg')}
                alt="Third slide"
                style={{height:'100%', justifyContent:'center', display:'flex'}}
              />
              <Carousel.Caption className="carousel-caption fadeInUp">
                <h3 style={{fontWeight:'bolder', fontSize:'45px'}}>Your rescue team has arrived!
      </h3>
                <p style={{fontSize:'20px'}}>Picture a vault where your certificates, receipts, and credits —organized, accessible, and CME tracking for licensing needs is readily available.
                 Say goodbye to clutter and hello to clarity with CEkeeper, where your CME journey gets a first-class upgrade!</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>

        <div class="container">
          <h1 className="heading">Why Choose CEKeeper??</h1>
  <div class="row">
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Centralized CME Storage</h5>
          <p class="card-text">Securely store and access all your CME certificates and receipts in one place.</p>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Progress Tracking</h5>
          <p class="card-text">Instantly see how many CME credits you've earned and what's required to maintain and renew your license.</p>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Ease of Use</h5>
          <p class="card-text">Our user-friendly interface ensures you spend less time managing paperwork and more time focusing on what matters most—patients and your own wellbeing</p>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Secure and Confidential</h5>
          <p class="card-text">We prioritize the confidentiality and security of your professional data. CEKeeper uses advanced security protocols to ensure that your information is protected.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="responsive-band">
  <section class="text-white-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="hero" src={require("../components/20945550.jpg")} />
      </div>

      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h2 style={{ fontWeight: 'bolder', fontSize: '3rem', fontStyle: 'italic' }}>Key Features</h2>
        <ul style={{ listStyleType: 'square', textAlign: 'left' }}>
          <div className="list" style={{ fontSize: '1.7rem', fontWeight: 'bold', fontStyle: 'italic', paddingTop: '50px' }}>
            <li className="animated-text" style={{ animationDelay: '0.5s', animationDuration: '1s', animationFillMode: 'forwards', opacity: 0, transform: 'translateX(50px)' }}>• Instant Receipt Upload</li>
            <p style={{ fontSize: '1.3rem', fontWeight: 'normal' }}> Upload and organize CME receipts with ease, making reimbursement and record-keeping straightforward.</p>
            <li className="animated-text" style={{ animationDelay: '1.5s', animationDuration: '1s', animationFillMode: 'forwards', opacity: 0, transform: 'translateX(50px)' }}>• CME Credit Tracker</li>
            <p style={{ fontSize: '1.3rem', fontWeight: 'normal' }}>Keep an eye on your CME progress with our intuitive tracker that tells you how many credits you've earned and what you need for your next licensing period.</p>
            <li className="animated-text" style={{ animationDelay: '2.5s', animationDuration: '1s', animationFillMode: 'forwards', opacity: 0, transform: 'translateX(50px)' }}>• Accessible Anywhere</li>
            <p style={{ fontSize: '1.3rem', fontWeight: 'normal' }}>Access your CME records anytime, anywhere, from any device. Your data is secure, backed up, and always at your fingertips.</p>
          </div>
        </ul>
      </div>
    </div>
  </section>
</div>
 <div className="band2" style={{backgroundColor:'#3939eb', color:'white'}}>
        <h1 style={{paddingTop:'35px', fontWeight:'bolder', fontSize:'2rem'}}>Get Started Today</h1>
        <p style={{paddingTop:'45px', margin:'30px', fontSize:'1.5rem'}}>Join CEkeeper and turn your CME management into a joy ride. With CEkeeper, tracking, storing, and accessing your CME records is easier than ever. Sign up now and take the first step towards hassle-free CME management.
        <button className="moving-button"><Link to="/signup">Sign Up Now</Link></button>
        </p>
        <p style={{ fontSize:'1rem', paddingBottom:'60px'}}>Got a question? Need a giggle? Contact us at [contact information]. We're all ears (and jokes).</p>
       </div>
      <footer className="App-footer">© 2024 CEKeeper</footer>
    </div>
  );
}

export default LandingPg;
