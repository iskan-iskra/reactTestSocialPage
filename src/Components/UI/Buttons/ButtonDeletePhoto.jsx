import React from 'react';
import Classes from './Buttons.module.scss'

const ButtonDeletePhoto = ({visible}) => {
    const rootClasses = [Classes.PhotoDelete]
    if (visible){
        rootClasses.push(Classes.active)
    }
    function DeletePhoto(){
        console.log("DeleteThisPhoto");
    }
    return (
        <button onClick={DeletePhoto} className={rootClasses.join(' ')}>
            <div></div>
        </button>
    );
};

export default ButtonDeletePhoto;