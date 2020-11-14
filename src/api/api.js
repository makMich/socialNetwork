import React from 'react'
import * as axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "ed7b073e-9590-4316-8be4-06bca08c3352"}
});

export const UserAPI = {
    getUser(currentPage = 1, pagesSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
            .then(responce => responce.data)
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
            .then(responce => responce.data)
    },

    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
            .then(responce => responce.data)
    },
    getMe() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then(responce => responce.data)
    },
    getProfile(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(responce => responce.data)
    }

};
