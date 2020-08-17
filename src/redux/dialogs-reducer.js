const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                newMessageBody: ''
            };
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        default:
            return state;
    }
};

export const SendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
};

export default dialogsReducer;