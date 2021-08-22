import React from 'react';
import Classes from './Buttons.module.scss'

const ButtonBack = () => {
    function back(){
        console.log('back');
    }
    return (
        <button onClick={back} className={Classes.back}></button>
    );
};

export default ButtonBack;