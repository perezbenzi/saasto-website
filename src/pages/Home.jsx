import React from 'react';
import './Home.css';
import dots from '../assets/dots.png';
// import tnt from '../assets/tnt.png';
import Button from '../components/Button/Button';

const Home = () => {
  return (
    <div className="background-wrapper">
      <div className="gradient-dot"></div>
      {/* <img src={tnt} alt="Tnt" className="tnt" /> */}
      <div className="container">
        <div className="text-div">
          <h1 className="title-home" style={{ color: '#8976FD' }}>
            {' '}
            <span style={{ color: '#332C5C' }}>Committed to People Committed to</span> the Future
          </h1>
          <p className="text-home">An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at</p>
          <Button text={'Get started now'} />
        </div>
        <img src={dots} alt="Dots" className="dots" />
      </div>
    </div>
  );
};

export default Home;
