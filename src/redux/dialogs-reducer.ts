import {ActionsTypesInfer} from "./redux-store";


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
type ActionType = ActionsTypesInfer<typeof actions>

export const actions = {
    sendMessage : (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody} as const)
}

const dialogsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}


export default dialogsReducer;