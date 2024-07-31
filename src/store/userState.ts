import { atom } from "recoil";

export const userState = atom({
    key: 'userState', //一意の値、ファイル名など
    default: { isAdmin: false }
})