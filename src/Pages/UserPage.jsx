import React from 'react';
import UserFriendsList from '../Components/User/UserFriendsList';
import SelectFontWeight from '../Components/SelectorFontWeight/SelectFontWeight';
import HrLine from '../Components/UI/HrLine/HrLine';
import UserProfile from '../Components/User/UserProfile';
import UserMedia from '../Components/User/UserMedia';

const UserPage = () => {
    return (
        <div className="AppBody">
            <UserProfile/>
            <HrLine/>
            <SelectFontWeight/>
            <HrLine/>
            <UserFriendsList/>
            <HrLine/>
            <UserMedia/>
        </div>
       
    );
};

export default UserPage;