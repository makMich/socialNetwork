import {UserAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOFING_PROGRESS = 'TOGGLE_FOLLOFING_PROGRESS';


let initialState = {
    users: [],
    pagesSize: 5,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: true,
    followingInProgress: [],
};


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOFING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
};

export const followSuccess = (userId) => {
    return {type: FOLLOW, userId}
};

export const unfollowSuccess = (userId) => {
    return {type: UNFOLLOW, userId}
};

export const setUsers = (users) => {
    return {type: SET_USERS, users}
};

export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
};

export const setTotalUsersCount = (count) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount: count}
};

export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
};

export const toggleFollowingProgress = (isFetching, userId) => {
    return {type: TOGGLE_FOLLOFING_PROGRESS, isFetching, userId}
};

export const getUsers = (currentPage, pagesSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        UserAPI.getUser(currentPage, pagesSize).then(
            data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            }
        )
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        UserAPI.follow(userId)
            .then(
                data => {
                    if (data.resultCode === 0) {
                        dispatch(followSuccess(userId));
                    }
                    dispatch(toggleFollowingProgress(false, userId));
                }
            );
    }
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        UserAPI.unfollow(userId)
            .then(
                data => {
                    if (data.resultCode === 0) {
                        dispatch(unfollowSuccess(userId));
                    }
                    dispatch(toggleFollowingProgress(false, userId));
                }
            );
    }
};


export default usersReducer;