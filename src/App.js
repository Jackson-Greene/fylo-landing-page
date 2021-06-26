import React from 'react';
import NavBar from './components/NavBar';
import InputField from './components/InputField';
import Button from './components/Button';
import Footer from './components/Footer';

import './App.scss';
import ReviewCard from './components/ReviewCard';

function App() {
  return (
    <>
      <NavBar className="dog"></NavBar>

      <section className="hero-section">
        <div className="container">
          <div className="right-col">
            <img className="hero-image" src={"./images/illustration-1.svg"} alt="illustration of files" />
          </div>

          <div className="left-col">
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
            <InputField></InputField>
            <Button></Button>
          </div>
        </div>
      </section>

      <section className="information-section">
        <div className="container">
          <div className="right-col">
            <img className="hero-image" src={"./images/illustration-2.svg"} alt="illustration of files" />
          </div>

          <div className="left-col">
            <h2>Stay productive, wherever you are</h2>
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
            <div className="cta">
              <a href="/">See how Fylo works</a>
              <img src={"./images/icon-arrow.svg"} alt="arrow icon"></img>
            </div>
            
            <ReviewCard></ReviewCard>
          </div>
        </div>
      </section>
      
      <section className="sign-up-section">
        <div className="container">
          <div className="left-col">
            <h2>Get early access today</h2>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
          </div>
          <div className="right-col">
            <InputField></InputField>
            <Button></Button>
          </div>
        </div>
      </section>

      <Footer></Footer>
        
    </>
  );
}

export default App;
