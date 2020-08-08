import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _callSubscriber() {
        console.log("rerenderEntireTree");
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello friends'},
                {id: 2, message: 'I am beautiful, ripe tomato'},
                {id: 3, message: 'Tanya is the most beautiful girl in the world!!!'},
                {id: 4, message: 'I am sexy and i know it '}
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Misha'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Leonid'},
                {id: 5, name: 'Andrey'}
            ],

            newMessageBody: '',

            messages: [
                {id: 1, message: 'Hy, how are you?'},
                {id: 2, message: 'it is ok'},
                {id: 3, message: 'No, thanks'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yes'}
            ]
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
};

window.store = store;
export default store;


