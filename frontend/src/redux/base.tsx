import { combineReducers } from "@reduxjs/toolkit";
import appReducer from './slices/app';
import chatReducer from './slices/chat';
import authReducer from './slices/auth';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { PersistConfig } from 'redux-persist';

// Tạo bộ lưu trữ "noop" (không hoạt động) cho môi trường không có `window` (như trên server)
const createNoopStorage = (): Storage => {
    return {
        getItem(_key: string) {
            return Promise.resolve(null);
        },
        setItem(_key: string, value: any) {
            return Promise.resolve(value);
        },
        removeItem(_key: string) {
            return Promise.resolve();
        },
    };
};

// Chọn loại storage dựa trên môi trường
const storage = 
    typeof window !== 'undefined' 
        ? createWebStorage('local') 
        : createNoopStorage();

// Cấu hình `PersistConfig` cho redux-persist
const rootPersistConfig: PersistConfig<any> = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
};

// Kết hợp các reducers
const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    chat: chatReducer,
});

export { rootPersistConfig, rootReducer };
