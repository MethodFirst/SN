const SEND_MESSAGE = 'SEND_MESSAGE';


type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Jove'},
        {id: 2, name: 'Vic'},
        {id: 3, name: 'Sv'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Dandy'},
        {id: 6, name: 'Mick'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it skills?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Nice to meet you'},
        {id: 5, message: 'Thank you'}
    ] as Array<MessageType>
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;