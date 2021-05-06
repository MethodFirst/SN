import axios from "axios";
import {UserType} from "../types/types";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "5b81d964-99b4-407f-90c1-60763e8e54a8"
    }
});


export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodesEnumForCaptcha {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number,
    error: string | null
}

export type APIResponseType <D ={}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}














