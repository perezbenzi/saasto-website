import React from 'react';
import './Home.css';
import dots from '../assets/dots.png';
import people from '../assets/people-icon.png';
import download from '../assets/download-icon.png';
import costumer from '../assets/costumer-icon.png';
import Button from '../components/Button/Button';
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
    <div>
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
      <div className="data-section-wrapper">
        <div className="data-section">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} className="data-item">
              <img className="data-icons" src={people} alt="" />
              <div className="text-content">
                <h1 className="data-number">15k+</h1>
                <p className="data-name">Active user</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} className="data-item">
              <img className="data-icons" src={download} alt="" />
              <div className="text-content">
                <h1 className="data-number">30k+</h1>
                <p className="data-name">Total Download</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} className="data-item">
              <img className="data-icons" src={costumer} alt="" />
              <div className="text-content">
                <h1 className="data-number">10k+</h1>
                <p className="data-name">Customer</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
