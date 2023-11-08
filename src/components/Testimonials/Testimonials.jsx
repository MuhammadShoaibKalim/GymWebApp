import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
    const transition = { type: 'spring', duration: 3 }
    const [selcted, setSelcted] = useState(0);
    const tLength = testimonialsData.length;
    return (
        <div className="testimonials" id="testimonials">
            <div className="left-t">
                <span>TESTIMONIALS</span>
                <span className="stroke-text">WHAT THEY</span>
                <span>SAY ABOUT US</span>
                <motion.span
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                    key={selcted}

                >{testimonialsData[selcted].review}</motion.span>
                <span>
                    <span>{testimonialsData[selcted].name}</span> -{" "}
                    {testimonialsData[selcted].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                ></motion.div>
                <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    key={selcted}
                    src={testimonialsData[selcted].image} alt="" />
                <div className="arrows">
                    <img
                        onClick={() => {
                            selcted === 0
                                ? setSelcted(tLength - 1)
                                : setSelcted((prev) => prev - 1);
                        }}
                        src={leftArrow}
                        alt=""
                    />
                    <img
                        onClick={() => {
                            selcted === tLength - 1
                                ? setSelcted(0)
                                : setSelcted((prev) => prev + 1);
                        }}
                        src={rightArrow}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
