import React from 'react';
import Classes from './Buttons.module.scss'

const ButtonChangeAvatar = () => {
    function ChangeAvatar(){
        console.log('changeAvatar');
    }
    return (
        <button onClick={ChangeAvatar} className={Classes.ChangeAvatar}>
            <div></div>
        </button>
    );
};

export default ButtonChangeAvatar;