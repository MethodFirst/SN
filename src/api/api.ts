import axios from "axios";
import {UserType} from "../types/types";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "6de77dcd-3a2d-418e-b251-5954e31c6372"
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














