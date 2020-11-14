import {UserAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: {
            return state
        }
    }
};


export const getMe = () => {
    return (dispatch) => {
        UserAPI.getMe().then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(SetAuthUserData(id, email, login));
                }
            }
        )
    }
};

export const SetAuthUserData = (userId, email, login, isAuth) => {
    return {type: SET_USER_DATA, data: {userId, email, login, isAuth}}
};

export default authReducer;
// if (responce.data.resultCode === 0) {
//             let {id, email, login} = responce.data.data;
//             this.props.SetAuthUserData(id, email, login);
//         }