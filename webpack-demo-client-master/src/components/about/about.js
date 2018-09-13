import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const About = () => (
    <BrowserRouter>
        <div className="about">
            <h2>About</h2>
            <h3>webpack</h3>
            <img src="http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg"/>
        </div>
    </BrowserRouter>
);
  

import './about.css'
import './aboutJS.js'

console.log('23423;sfkljf;sdkljf')



export default About;