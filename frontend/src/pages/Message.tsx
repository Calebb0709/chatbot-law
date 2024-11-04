import React from 'react';
import { Cpu } from '@phosphor-icons/react';
import { Divider } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Avatar } from 'antd';
import { marked } from 'marked';
import hljs from 'highlight.js';

type MessageProp = {
    message: IMessage;
};

const Message: React.FC<MessageProp> = ({ message }) => {
    const { user } = useSelector((state: RootState) => state.auth);

    const renderer = new marked.Renderer();
    renderer.code = ({ text, lang }) => {
        const validLanguage = hljs.getLanguage(lang) ? lang : 'plaintext';
        return `<pre><code class="language-${validLanguage}">${hljs.highlight(validLanguage, text).value}</code></pre>`;
    };

    marked.setOptions({ renderer });
    const html = marked(message.content);

    return (
        <div className="max-w-2xl mx-auto">
            {message.sender_email ? (
                <div className="flex space-x-5">
                    <Avatar
                        size={40}
                        src={user?.profileImage}
                        className="border flex items-center justify-center p-1"
                    >
                        {user ? user.full_name[0] : 'CN'}
                    </Avatar>
                    <div className="flex flex-col">
                        <h2 className="font-semibold">{user?.full_name}</h2>
                        <p className="pt-1 whitespace-pre-wrap">{message.content}</p>
                    </div>
                </div>
            ) : (
                <div className="flex space-x-5">
                    <div className="w-10 h-10 rounded-full border flex items-center justify-center p-1">
                        <Cpu size={32} />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-semibold">ChatBot</h2>
                        <div
                            className="whitespace-pre-wrap"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </div>
            )}
            <Divider className="mb-5 w-full my-5" />
        </div>
    );
};

export default Message;
