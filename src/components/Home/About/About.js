import React from 'react';
import './About.scss'

const About = () => {
    return (
        <div className="container about">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <img src="https://i.imgur.com/EZbjc9N.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-sm-12 col-md-6">
                    <h1 className="about-heading">About us</h1>
                    <h1 className="special">We are here to dream!</h1>
                    <h1>Our team is here to serve you</h1>
                    <p>Stand with your feet shoulder-width apart with your core set tight and a barbell held at your shoulders, palms facing forwards. From here, tense and drive the bar upward, really squeezing your shoulder blades together at the top of the movement. Lower with control.
                    Increase the weight each set and rest for 1 minute in between. Finish with a
                    triple drop-set - the max weight you can do for 10 reps,
                    then immediately drop 10 per
                    cent weight and do another
                    10 reps without resting, then repeat once more</p>
                </div>
            </div>
        </div>
    );
};

export default About;