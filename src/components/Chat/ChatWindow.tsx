'use client'
import React, { useRef, useCallback, memo } from 'react';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import ChatMessage from './ChatMessage';
import LoadingIndicator from './LoadingIndicator';
import { useChatScroll, CustomVariableSizeList } from '@/hooks/useChatScroll';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
}

interface ChatWindowProps {
    messages: Message[];
    isThinking: boolean;
    inputHeight: number;
}

const getItemSize = (index: number, messages: Message[]) => {
    const baseHeight = 60;
    const charsPerLine = 60;
    const text = messages[index]?.text || '';
    const lines = Math.ceil(text.length / charsPerLine);
    return baseHeight + (lines > 1 ? (lines - 1) * 20 : 0);
};

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isThinking, inputHeight }) => {
    const listRef = useRef<CustomVariableSizeList>(null);
    const itemCount = messages.length + (isThinking ? 1 : 0);

    const { handleScroll, scrollToBottom } = useChatScroll({ listRef, itemCount });

    const Row = memo(({ index, style }: ListChildComponentProps) => {
        if (isThinking && index === messages.length) {
            return (
                <div style={style} className="flex justify-start p-4">
                    <LoadingIndicator />
                </div>
            );
        }
        const message = messages[index];
        return (
            <div style={style}>
                <ChatMessage message={message} />
            </div>
        );
    });

    const rowHeights = useRef<{ [key: number]: number }>({});
    const itemSize = useCallback((index: number) => {
        if (rowHeights.current[index]) {
            return rowHeights.current[index];
        }
        return getItemSize(index, messages);
    }, [messages]);

    const HEADER_HEIGHT = 64; // Approximate height of your header
    const listHeight = window.innerHeight - HEADER_HEIGHT - inputHeight;

    return (
        <div className="flex-1 overflow-hidden relative">
            {/* New wrapper div for centering the chat thread */}
            <div className="max-w-3xl mx-auto h-full"> {/* You can adjust max-w-3xl to max-w-xl or max-w-2xl based on desired thread width */}
                <VariableSizeList
                    ref={listRef}
                    height={listHeight > 0 ? listHeight : 1}
                    width="100%" // This now means 100% of the max-w-3xl container
                    itemCount={itemCount}
                    itemSize={itemSize}
                    estimatedItemSize={80}
                    onScroll={handleScroll}
                    className="scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"
                >
                    {Row}
                </VariableSizeList>
            </div>
        </div>
    );
};

export default ChatWindow;