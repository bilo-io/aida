'use client'
// src/components/chat/ChatMessage.tsx
import React from 'react';
import Image from 'next/image'; // Assuming Next.js for Image component
import MarkdownRenderer from '../Markdown';

interface ChatMessageProps {
    message: {
        id: string;
        text: string;
        sender: 'user' | 'ai';
    };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    const isUser = message.sender === 'user';
    const avatarSrc = isUser ? '/assets/img/avatar-user.png' : '/assets/img/avatar-ai.png'; // Replace with actual avatar paths

    return (
        <div className={`flex p-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
            {!isUser && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden mr-3">
                    <Image src={avatarSrc} alt="Avatar" width={32} height={32} className="object-cover" />
                </div>
            )}
            <div
                className={`max-w-[70%] p-3 rounded-lg shadow-sm ${isUser
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none dark:bg-gray-700 dark:text-gray-100'
                    }`}
            >
                {isUser
                    ? <p className="text-sm break-words whitespace-pre-wrap overflow-hidden overflow-x-auto">{message.text}</p>
                    : <MarkdownRenderer content={message.text} />
                }
            </div>
            {isUser && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden ml-3">
                    <Image src={avatarSrc} alt="Avatar" width={32} height={32} className="object-cover" />
                </div>
            )}
        </div>
    );
};

export default ChatMessage;