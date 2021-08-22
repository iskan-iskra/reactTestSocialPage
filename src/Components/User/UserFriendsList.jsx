import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import FriendsData from '../../Store/FriendsData';
import Fonts from '../../Style/Fonts';
import Friend from '../Friend/Friend';
import ButtonAddFriend from '../UI/Buttons/ButtonAddFriend';
import ButtonAddFriends from '../UI/Buttons/ButtonAddFriends';
import ButtonDeleteFriend from '../UI/Buttons/ButtonDeleteFriend';
import Modal from '../UI/Modal/Modal';
import Classes from './User.module.scss';

const UserFriendsList = observer(() => {
    const [modalActive, setModalActive] = useState(false);
    const PotentialFriends = FriendsData.PotentionalFriends;
    const emptyPotentialFriend = [Classes.switcher];
    const emptyFriend = [Classes.switcher];
    if(PotentialFriends.length===0){
        emptyPotentialFriend.push(Classes.activated)
    };
    if(FriendsData.Friends.length===0){
        emptyFriend.push(Classes.activated)
    };
    function changeModalActive(){
        setModalActive(true)
    };
    return (
        <div className={Classes.Friends}>
            <div style={Fonts.Body1}>Friends</div>
            {FriendsData.Friends.map((friend)=>
                <Friend key={friend.Id}
                        FirstName={friend.Name.First}
                        SecondName={friend.Name.Second}
                        Role={friend.Role}
                        Url={friend.PhotoUrl}
                        >
                    <ButtonDeleteFriend onClick={()=>FriendsData.removeFriend(friend.Id)}/>
                </Friend>)
            }
            <div className={emptyFriend.join(' ')} style={Fonts.SubTitle1}> You can add friends, just push button </div>
            <Modal modal={modalActive} setActive={setModalActive}>
                <div>
                    {PotentialFriends.map((potentialFriend)=>
                    <Friend key={potentialFriend.Id}
                        FirstName={potentialFriend.Name.First}
                        SecondName={potentialFriend.Name.Second}
                        Role={potentialFriend.Role}
                        Url={potentialFriend.PhotoUrl}
                        >
                        <ButtonAddFriend onClick={()=>FriendsData.addFriend(potentialFriend.Id)}></ButtonAddFriend>
                    </Friend>)
                    }
                    <div className={emptyPotentialFriend.join(' ')} style={Fonts.SubTitle1}> you are already friends with everyone </div>
                </div>
            </Modal>
            <ButtonAddFriends onClick={changeModalActive}></ButtonAddFriends>
        </div>
    );
})

export default UserFriendsList;