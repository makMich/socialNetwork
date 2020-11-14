import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
        <div className={s.lds_roller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        )
    }

    return (
        <div className={s.profile}>
            <div className={s.ground}>
                <img
                    src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"/>
            </div>
            <div className={s.avatar}>
                <img src={props.profile.photos.small}/>
                 + description
            </div>
        </div>
    );
};

export default ProfileInfo;