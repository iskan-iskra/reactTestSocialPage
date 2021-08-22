import React from 'react';
import Classes from './Buttons.module.scss'

const ButtonAddFriend = ({...props}) => {
    return (
        <button {...props} className={Classes.FriendAdd}>
        </button>
    );
};

export default ButtonAddFriend;