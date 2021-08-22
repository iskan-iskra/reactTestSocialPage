import React from 'react';
import Classes from './User.module.scss'
import ButtonChangeAvatar from '../UI/Buttons/ButtonChangeAvatar';
import Fonts from '../../Style/Fonts';
import PhotoAvatarMain from '../UI/Image/PhotoAvatarMain';
import UserData from '../../Store/UserData';
import { observer } from 'mobx-react-lite';

const UserProfile = observer( () => {
    return (
        <div className={Classes.Profile}>
            <PhotoAvatarMain url={UserData.PhotoUrl}>
                <ButtonChangeAvatar/>
            </PhotoAvatarMain>
            <div className={Classes.Name} style={Fonts.SubTitle1}>{UserData.Name.First+' '+UserData.Name.Second}</div>
            <div className={Classes.Role} style={Fonts.Cuption}>{UserData.Role}</div>
        </div>
    );
})

export default UserProfile;