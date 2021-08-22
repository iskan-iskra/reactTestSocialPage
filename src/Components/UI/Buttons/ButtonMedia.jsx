import React from 'react';
import Fonts from '../../../Style/Fonts';
import Classes from './Buttons.module.scss'

const ButtonMedia = ({children, visible, ...props}) => {
    const rootClasses = [Classes.ButtonMedia]
    if (visible){
        rootClasses.push(Classes.active)
    }
    return (
        <button {...props}
                className={rootClasses.join(' ')}
                style={Fonts.BUTTON1}>
                {children}
        </button>
    );
};

export default ButtonMedia;