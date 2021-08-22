import React from 'react';
import Classes from './Photo.module.scss'

const PhotoAvaterSecondary = (props) => {
    return (
        <div className={Classes.AvatarSecondary}
            style={{backgroundImage: 'url(' + props.url +')'}}
            ></div>
    );
};

export default PhotoAvaterSecondary;