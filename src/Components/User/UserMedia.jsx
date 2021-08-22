import { observer } from 'mobx-react-lite';
import React, {useState} from 'react';
import UserData from '../../Store/UserData';
import Fonts from '../../Style/Fonts';
import ButtonDeletePhoto from '../UI/Buttons/ButtonDeletePhoto';
import ButtonMedia from '../UI/Buttons/ButtonMedia';
import PhotoMedia from '../UI/Image/PhotoMedia';
import Classes from './User.module.scss'

const UserMedia = observer(() => {
    const [activeButton, setActiveButton] = useState(false)
    function switchDeleting(){
        setActiveButton(!activeButton)
    }
    return (
        <div className={Classes.UserMedia}>
            <div style={Fonts.HeadLine5}>My media</div>
            <div className={Classes.Content}>{
                UserData.Media.map((Photo)=>
                <PhotoMedia key={Photo.PhotoId}
                            Url={Photo.PhotoUrl}>
                    <ButtonDeletePhoto visible={activeButton}/>
                </PhotoMedia>)
            }
                
            </div>
            <div className={Classes.ButtonsWrapper}>
                <ButtonMedia onClick={switchDeleting} visible={activeButton}>Delete</ButtonMedia>
                <ButtonMedia>Add</ButtonMedia>
            </div>
        </div>
    );
})

export default UserMedia;