import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Head.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import {motion} from  'framer-motion'
import NumberCounter from 'number-counter'

const Head = () => {
  const transition = {type: 'spring', duration: 3};
  const mobile = window.innerWidth<=768?true:false;
  return (
    <div className="head" id='head'>
      <div className="blur blur-hero"></div>
      <div className="left-head">
        
        <Navbar/>

        <div className="best-adv">
          <motion.div
            initial={{left: mobile?"130px":"245px"}}
            whileInView={{left: '8px'}}
            transition={{...transition, type: 'tween'}}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
      
        <div className="head-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix='+'/>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={950} start={800} delay='5' preFix='+'/>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50} start={0} delay='1.75' preFix='+'/>
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        
        <div className="head-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      
      </div>

      <div className="right-head">

        <button className="btn">Join Now</button>

        <motion.div className="heart-rate"
        transition={transition}
        whileInView={{right: '4rem'}}
        initial={{right: '-1rem'}}>
          <img src={heart} alt="" />
          <span>Heart Rate</span><span>166 bpm</span>
        </motion.div>
      </div>

      <img src={hero_image} alt="" className='hero-image'/>
      <motion.img src={hero_image_back} alt="" className='hero-image-back'
      transition={transition}
      whileInView={{right: '24rem'}}
      initial={{right: '16rem'}}
      />

      <motion.div className="calories"
      transition={transition}
      whileInView={{right: '35rem'}}
      initial={{right: '45rem'}}
      >
        <img src={calories} alt="" />
        <div>
          <span>Calories Burned</span><span>220 kcal</span>
        </div>
      </motion.div>
    
    </div>
  )
}

export default Head