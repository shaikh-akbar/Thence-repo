import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import sparkle from '../../assets/sparkle.png';
import homeimg from '../../assets/homeimg.png';
import Vector1 from '../../assets/Vector1.png';
import ExploreNow from '../caraousel/ExploreNow';
import Question from '../QuestionSession/Question';
import Footer from '../Footer/Footer';

function Home() {
  

  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home-title">
          <h3 className='h3-title'>Success Stories</h3>
          <h1 className='h2-title'>Every Success Journey<br /> &nbsp;  We've Encountered.</h1>
        </div>
        <div className="main-parent">
          <div className="main-card">
            <div className="middle-card">
              <img src={sparkle} alt='not found' className='sparkle-img' loading='lazy'/>
              <h2>40%</h2>
              <p>Achieved Reduction in <br />project execution time<br />by optimizing team <br />availability</p>
            </div>
            <div className="bottom-card">
              <img src={Vector1} alt='not found' loading='lazy'/>
              <div className="employment">
                <h2>10 Days</h2>
                <p>Staff Deployment</p>
              </div>
            </div>
            <div className="bottom-right-card">
              <div className="employment-1">
                <h2>$0.5<span>Million</span></h2>
                <p>Reduce Client Expenses<br />By Saving On Hiring And <br />Employee cost.</p>
              </div>
            </div>
            <img src={homeimg} alt='not found' className='home-img' loading='lazy'/>
          </div>

          {/* Carousel container */}
          
          <div className='explore-div'>
            <ExploreNow />
          </div>
        </div>
      </div>


      {/* question session  */}
      <div>
        <Question/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
