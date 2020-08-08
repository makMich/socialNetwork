import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let postElement =
        props.posts.map(post => <Post message={post.message}/>);

    let newPostElement = React.createRef();


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div>
            <div className={s.headerPost}>
                <h3>My Posts</h3>
            </div>
            <div>
                <div className={s.textArea}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div className={s.buttonAdd}>
                    <button onClick={addPost} className={s.button}>Add</button>
                </div>
                <div className={s.posts}>
                    {postElement}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;