import React from 'react';
import Classes from './Buttons.module.scss'

const ButtonMenu = () => {
    function menu(){
        console.log('menu');
    }
    return (
        <button onClick={menu} className={Classes.menu}></button>
    );
};

export default ButtonMenu;