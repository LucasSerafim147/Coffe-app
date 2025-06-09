import {MMKV} from 'react-native-mmkv'


export const storage  = new MMKV({
    id: 'hotCoffe'
});
export const storageCold  = new MMKV({
    id: 'icedCoffe'
});