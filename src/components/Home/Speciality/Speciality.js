import React from 'react';
import './Speciality.scss';

const Speciality = ({ item }) => {
    const { name, icon } = item;

    return (
        <div className="col-sm-12 col-md-4">
            <div className="speciality">
                <div className="icon d-flex justify-content-center align-items-center">
                    <img className="img-fluid" src={icon} alt="" />
                </div>
                <h3>{name}</h3>
                <p>Increase the weight each set and rest for 1 minute in between. Finish with a triple drop-set - the max weight you can do for 10 reps.</p>
            </div>
        </div>
    );
};

export default Speciality;