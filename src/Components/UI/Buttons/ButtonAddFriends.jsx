import React from 'react';
import Fonts from '../../../Style/Fonts';
import Classes from './Buttons.module.scss';

const ButtonAddFriends = ({...props}) => {
    return (
        <button {...props} className={Classes.FriendsAdd}>
            <div className={Classes.text} style={Fonts.BUTTON2}>Add friend</div>
            <div className={Classes.icon}></div>
        </button>
    );
};

export default ButtonAddFriends;