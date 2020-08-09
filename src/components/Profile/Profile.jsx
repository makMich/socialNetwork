import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
                posts={props.state.posts}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;