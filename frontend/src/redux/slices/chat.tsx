import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Định nghĩa các interface cần thiết cho IChat và IMessage
interface IMessage {
    id: number;
    content: string;
    senderId: string;
    chat: number; // ID của chat mà tin nhắn thuộc về
    timestamp: Date;
}

interface IChat {
    id: number;
    title: string;
    messages: IMessage[];
}

interface ChatState {
    chats: IChat[];
    messages: IMessage[];
    selectedMode: string;
}

// Trạng thái ban đầu của slice
const initialState: ChatState = {
    chats: [],
    messages: [],
    selectedMode: 'chattergeist',
};

// Tạo một slice cho chat với các reducers
const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChats: (state, action: PayloadAction<IChat[]>) => {
            state.chats = action.payload;
        },

        addChat: (state, action: PayloadAction<IChat>) => {
            state.chats.push(action.payload);
        },

        deleteChat: (state, action: PayloadAction<number>) => {
            state.chats = state.chats.filter(chat => chat.id !== action.payload);
        },

        setMessages: (state, action: PayloadAction<IMessage[]>) => {
            state.messages = action.payload;
        },

        addMessage: (state, action: PayloadAction<IMessage>) => {
            state.messages.push(action.payload);
        },

        setChatTitleFromMessage: (state, action: PayloadAction<{chatId: number, title: string}>) => {
            const { chatId, title } = action.payload;
            const chat = state.chats.find(chat => chat.id === chatId);
            if (chat) {
                chat.title = title;
            }
        },

        resetChatHistory: (state) => {
            state.chats = [];
            state.messages = [];
        },

        setSelectedMode: (state, action: PayloadAction<{type: string}>) => {
            state.selectedMode = action.payload.type;
        }
    }
});

// Export các action và reducer của slice
export const { setChats, addChat, deleteChat, setMessages, addMessage, resetChatHistory, setChatTitleFromMessage, setSelectedMode } = chatSlice.actions;
export default chatSlice.reducer;
