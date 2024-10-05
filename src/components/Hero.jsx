import React from 'react'
import '../styles/Hero.css'
import wukong from '../assets/wukong-moblie.png'
import wukongpc from '../assets/wukong_pc.png'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
    useGSAP(()=> {
      gsap.to(".Hero_body", {
            opacity: 1,
            duration: 1.5,
      })
    })

    return (
        <>
            <section id="home" className="Hero">
                <div className="Hero_body">
                    <h2>
                        Explore a <span>land of wonders.</span>
                        Relive the tale of the <span>journey to the west.</span>
                    </h2>
                    <div className="btns">
                        <button className="review_btn"><a href="#trailer">Watch a trailer</a></button>
                        <button className="buy_btn"><a href="https://store.steampowered.com/app/2358720/Black_Myth_Wukong/">Buy the game</a></button>
                    </div>
                </div>
                <div className="Hero_img">
                    <img src={wukong} alt="hero_img"/>
                </div>
                <div className="Hero_img_pc">
                    <img src={wukongpc} alt="hero_img"/>
                </div>
            </section>
        </>
    )
}
export default Hero
