import React from 'react';
import Classes from './Photo.module.scss'

const PhotoMedia = ({children, ...props}) => {
    return (
        <div className={Classes.PhotoMedia}
            style={{backgroundImage: 'url(' + props.Url +')'}}>
            {children}
        </div>
    );
};

export default PhotoMedia;