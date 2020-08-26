import React from 'react'
import s from './Users.module.css';
import photoUser from "../../../src/assets/img/user.png"


let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pagesSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={() => {
                                 props.changeSelectedPage(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={s.wrapper}>
                <div className={s.avatar}><img className={s.photo}
                                               src={u.photos.small != null ? u.photos.small : photoUser}/></div>
                <div className={s.fullName}>{u.name}</div>
                <div className={s.status}>{u.status}</div>
                <div className={s.location}>

                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </div>
                <div> {u.followed ?
                    <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>} </div>
            </div>)
        }
    </div>
};

export default Users;