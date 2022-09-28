import React from 'react';
import '../../styles/banner.scss'
import '../../bootstrap'

const Banner = () => {
    return (

        <div className="banner">
            <div className="banner-third"></div>
            <div className="banner-second"></div>
            <div className="banner-main">
            <ul className="menu-items">
                <li className="selected"><a href="">Expériences</a></li>
                <li><a href="">Galerie</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            </div>                                               
        </div>
        
    );
};

export default Banner