import React, {useRef} from 'react'
import '../styles/About.css'
import level from '../assets/levelup.png'
import bosses from '../assets/bosses.png'
import tale from '../assets/tale.png'
import trailer from '../assets/Black Myth_ Wukong - Final Trailer _ PS5 Games(2).mp4'
import thumbnail from '../assets/thumbnail.png';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import FadeIn from "./FadeIn.jsx";

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const scrollRef = useRef();

    useGSAP(() => {
        const rightSideElements = gsap.utils.toArray('.right_side h2, .right_side p');

        rightSideElements.forEach((el) => {
            gsap.fromTo(el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: true,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        });
    }, []);

    return (
        <section id="about" className="about">
            <h1 className="section_name">ABOUT</h1>
            <div className="about_info">
                <FadeIn>
                <div className="left_side" ref={scrollRef}>
                    <img src={tale} alt="tale"/>
                    <img src={level} alt="levels"/>
                    <img src={bosses} alt="bosses"/>
                </div>
                </FadeIn>
                <div className="right_side" ref={scrollRef}>
                    <div className="tale_info">
                        <h2>A Tale Retold</h2>
                        <p>Experience the journey for yourself, battle mighty foes and embark on a quest of wonder</p>
                    </div>
                    <div className="level_info">
                        <h2>Level Up</h2>
                        <p>There are a lot of enemies with different levels, slay them to gain more levels to make
                            yourself powerful</p>
                    </div>
                    <div className="spell_info">
                        <h2>Diverse Skills</h2>
                        <p>Combine Spells and talent and slay those enemies and show your true prowess.Tailor your
                            skills and unleash your potential</p>
                    </div>
                    <div className="bosses_info">
                        <h2>Tough bosses</h2>
                        <p>Confront mighty foes, old and new. Clash with the legends!</p>
                    </div>
                </div>
            </div>
            <FadeIn>
            <h1 className="trailer" id="trailer">TRAILER</h1>
            <video
                controls
                src={trailer}
                poster={thumbnail}
            />
            </FadeIn>
        </section>
    )
}
export default About
