import React from "react";
import './index.css';

function Hero() {
    return (
        <section className="hero home-hero">
            <div className="columns">
                <div className="column is-6 hero-content-column">
                    <div className="hero-content pl-5">
                        <h1 className="title is-4">Hi, my name is Suvin.</h1>
                        <h1 className="title about-text is-2">I’m a freelance UX/UI Designer with a marketing background specializing in Shopify & Webflow.</h1>
                        <div className="hero-buttons has-text-left mt-5">
                            <button className="button is-link">
                                <span className="icon">
                                    <i class="fab fa-linkedin"></i>
                                </span>
                                <span>Linkedin</span>
                            </button>
                            <button className="button is-pink">
                                <span className="icon">
                                    <i class="fab fa-dribbble"></i>
                                </span>
                                <span>Dribbble</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="column is-6 has-text-centered">
                    <img className="hero-image" src="https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3ec8bd3a80fe62bc11cda_kristi-header-optimized.jpg"></img>
                </div>
            </div>
        </section>
    );
}

export default Hero;
