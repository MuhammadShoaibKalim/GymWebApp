import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Hero = () => {
    const transition = { type: 'tween', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/* the best ad */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? '165px' : '283px' }}
                        whileInView={{ left: '8px' }}
                        transition={transition}
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>
                {/* hero heading */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and
                            live up your life to fullest
                        </span>
                    </div>
                </div>
                {/* figure */}
                <div className="figures">
                    <div>
                        <span><CountUp end={15} start={0} duration={2.5} prefix='+' /></span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span><CountUp end={150} start={100} duration={3} prefix='+' /></span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><CountUp end={30} start={10} duration={3} prefix='+' /></span>
                        <span>fitness programs</span>
                    </div>
                </div>
                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>
                <motion.div className="heart-rate"
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={{ ...transition, type: 'spring' }}

                >
                    <img src={heart} alt="" />
                    <span>Heart Rate</span>
                    <span>105 bpm</span>
                </motion.div>
                {/* hero images */}
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={{ ...transition, type: 'spring' }}

                    src={hero_image_back} alt="" className="hero-image-back" />
                <motion.div className="calories"
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={{ ...transition, type: 'spring' }}

                >
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
