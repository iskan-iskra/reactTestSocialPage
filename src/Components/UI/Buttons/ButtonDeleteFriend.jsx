import React from 'react';
import Classes from './Buttons.module.scss'

const ButtonDeleteFriend = ({...props}) => {
    return (
        <button {...props} className={Classes.FriendDelete}></button>
    );
};

export default ButtonDeleteFriend;