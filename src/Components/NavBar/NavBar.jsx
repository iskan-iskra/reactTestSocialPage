import React from 'react';
import Fonts from '../../Style/Fonts';
import ButtonBack from '../UI/Buttons/ButtonBack';
import ButtonMenu from '../UI/Buttons/ButtonMenu';
import './NavBar.scss'

const NavBar = () => {
    return (
        <div className="AppHead">
            <ButtonBack/>
            <div className="title" style={Fonts.HeadLine6}>Profile</div>
            <ButtonMenu/>
        </div>
    );
};

export default NavBar;