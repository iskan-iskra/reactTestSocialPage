import React from 'react';
import Classes from './Photo.module.scss'

const PhotoAvatarMain = ({children,...props}) => {
    return (
        <div className={Classes.AvatarMain} 
            style={{backgroundImage: 'url(' + props.url +')'}}>
            {children}
        </div>
    );
};

export default PhotoAvatarMain;