import React from 'react';
import './Description.scss';

const Description = ({ image, benefits }) => {
    return (
        <div className="description-container">
            <img style={{ height: '400px' }} src={image} alt="" className="img-fluid w-100" />
            <p className="description mt-3">As most men get older, cholesterol numbers begin to move in the wrong direction. Levels of so-called bad cholesterol — low-density lipoprotein (LDL) — gradually increase. Levels of good cholesterol, called high-density lipoprotein (HDL), tend to fall. Unfortunately, that combination of high LDL and low HDL is one of the leading risk factors for heart disease. Excess cholesterol accumulates on the inner lining of blood vessels, leading to arthrosclerosis and heart attacks. The best way to keep LDL cholesterol levels down is to eat a diet low in saturated fat (the kind found in meat and high-fat dairy products.) The single best way to boost good HDL cholesterol? Exercise. A 2007 Danish study of 835 men found that regular physical activity was consistently associated with higher levels of HDL cholesterol. A meta-analysis of 52 exercise training trials, including 4700 subjects, found that HDL levels increased an average of 4.6 percent — enough to take a significant notch out of heart disease risk.</p>
            <ul>
                {
                    benefits.map(item => <li className="mb-2" key={item}>
                        <img src="https://i.imgur.com/rC6gLu5.png" className="mr-2" alt="" />
                        {item}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Description;