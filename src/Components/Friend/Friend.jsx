import React from 'react';
import Fonts from '../../Style/Fonts';
import PhotoAvaterSecondary from '../UI/Image/PhotoAvaterSecondary';
import Classes from './Friend.module.scss'

const Friend = ({children, ...props}) => {
    const FriendName = props.FirstName+" "+props.SecondName;
    const FriendRole = props.Role;
    const FriendPhotoUrl = props.Url;

    return (
        <div className={Classes.Friend}>
            <PhotoAvaterSecondary url={FriendPhotoUrl}/>
            <div className={Classes.FriendInfo}>
                <div style={Fonts.SubTitle1}>{FriendName}</div>
                <div className={Classes.FriendRole} style={Fonts.SubTitle2}>{FriendRole}</div>
            </div>
            {children}
        </div>
    );
};

export default Friend;