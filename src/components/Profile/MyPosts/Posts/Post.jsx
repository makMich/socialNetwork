import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRE3Vrb2Wo8gQvq_hHwfn2qhfqAUXiS2JKiEg&usqp=CAU'/>
            {props.message}
        </div>
    );
};

export default Post;