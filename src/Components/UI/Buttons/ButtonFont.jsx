import React from 'react';
import Fonts from '../../../Style/Fonts';
import Classes from './Buttons.module.scss'

const ButtonFont = ({children, ...props}) => {
    function changeFont(){
        console.log('FontChanged');
    }
    return (
        <button onClick={changeFont}
                className={Classes.ChangeFont} 
                style={Fonts.Body2}
                {...props}>
                {children}
        </button>   
    );
};

export default ButtonFont;