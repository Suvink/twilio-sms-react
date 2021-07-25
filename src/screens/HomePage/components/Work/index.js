import React from "react";
import './index.css';
import WorkCard from "./components/WorkCard";

function Work() {
    return (
        <section className="work-section">
            <h1 className="title is-3 mb-4">What I do?</h1>
            <div className="work-cards mt-4">
                <div className="columns">
                    <div className="column is-4">
                        <WorkCard color="blue" title="Brand Identity Building" des="What do you want your brand or company to be known for? We’ll articulate a brand identity, personality, and voice that will serve as the foundation for all your marketing communications." />
                    </div>
                    <div className="column is-4">
                        <WorkCard color="yellow" title="Community Development" des="Trying to make inroads with your local audience? We’ll craft an outreach plan and lay out the strategies you need to connect with your target community." />
                    </div>
                    <div className="column is-4">
                        <WorkCard color="green" title="Copy & Content Strategy" des="Need words? Let’s get you some good ones and a great process for creating remarkable, consistent content that resonates with your audience." />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;
