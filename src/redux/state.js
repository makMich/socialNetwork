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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

};

window.store = store;
export default store;


