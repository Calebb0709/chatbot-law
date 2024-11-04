import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteChat, setChatTitleFromMessage } from "@/redux/slices/chat";
import { RootState } from "@/redux/store";
import axios from "@/utils/axios";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Modal} from "antd";

type NewChatProps = {
    id: number;
    title: string;
};

const ChatRow: React.FC<NewChatProps> = ({ id, title }) => {
    const dispatch = useDispatch();
    const { token } = useSelector((state: RootState) => state.auth);

    const [inputTitle, setTitle] = useState<string>(title);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    useEffect(() => {
        setActive(window.location.pathname.includes(`/chat/${id}`));
    }, [id]);

    const handleEditTitle = () => {
        setIsEditing(true);
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            try {
                const response = await axios.patch(`/chats/${id}/`, { title: inputTitle }, {
                    headers: { Authorization: `JWT ${token}` },
                });
                dispatch(setChatTitleFromMessage({ chatId: id, title: response.data.title }));
                setIsEditing(false);
            } catch (error) {
                console.error("Error updating title:", error);
            }
        }
    };

    const handleDeleteChat = async () => {
        try {
            await axios.delete(`/chats/${id}/`, {
                headers: { Authorization: `JWT ${token}` },
            });
            dispatch(deleteChat(id));
            window.location.href = "/chat/"; // Redirect to the chat list page
            setIsModalVisible(false);
        } catch (error) {
            console.error("Error deleting chat:", error);
        }
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const navigateToChat = () => {
        window.location.href = `/chat/${id}`;
    };

    return (
        <div onClick={navigateToChat} className={`group hover:bg-input rounded-md p-2 relative ${active ? "bg-input" : ""}`}>
            {isEditing ? (
                <input
                    type="text"
                    value={inputTitle}
                    onChange={handleTitleChange}
                    onKeyPress={handleKeyPress}
                    onBlur={() => setIsEditing(false)}
                    autoFocus
                    className="px-2 focus:outline-muted w-full"
                />
            ) : (
                <p className="truncate text-sm py-0.5">{title || "New Chat"}</p>
            )}
            {active && (
                <>
                    <div className="absolute bottom-0 right-0 top-0 bg-gradient-to-l from-input w-20 from-60%"></div>
                    <div className="absolute top-0 bottom-0 right-0 flex items-center pr-2 gap-1">
                        <Pencil1Icon className="w-5 h-5 group-hover:block cursor-pointer" onClick={handleEditTitle} />
                        <TrashIcon className="w-5 h-5 group-hover:block cursor-pointer" onClick={showModal} />
                        <Modal
                            title="Delete Chat?"
                            visible={isModalVisible}
                            onOk={handleDeleteChat}
                            onCancel={handleCancel}
                            okText="Delete"
                            okButtonProps={{ danger: true }}
                            cancelText="Cancel"
                        >
                            <p>This action cannot be undone. This will permanently delete your chat.</p>
                        </Modal>
                    </div>
                </>
            )}
        </div>
    );
};

export default ChatRow;
