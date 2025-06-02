'use client';
// src/components/chat/ChatInput.tsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useAutoSizingTextarea } from '@/hooks/useAutoSizingTextarea';
import {
    FaPaperPlane,
    FaPlus,
    FaMicrophone,
    FaExpand,
    FaCompress,
} from 'react-icons/fa6';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
    isSending: boolean;
    onHeightChange: (height: number) => void;
}

// Define fixed heights for elements within the input to calculate textarea's max height
const TOP_TOGGLE_BAR_HEIGHT = 48; // Approx height for the expand/collapse button area
const BOTTOM_ACTION_BAR_HEIGHT = 56; // Approx height for the +, mic, send buttons area (p-2, icon size, padding)
const INPUT_VERTICAL_PADDING = 32; // Total vertical padding of the outer input wrapper (p-4 * 2)

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isSending, onHeightChange }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const inputContainerRef = useRef<HTMLDivElement>(null); // Ref for the outer fixed div

    // Memoize max_height calculation for useAutoSizingTextarea
    const getMaxTextareaHeight = useCallback(() => {
        if (isExpanded) {
            // When expanded, textarea fills the available space
            // Max height = total expanded input container height - top area - bottom area - internal border/padding
            const totalExpandedHeight = inputContainerRef.current?.offsetHeight || 0;
            return totalExpandedHeight - TOP_TOGGLE_BAR_HEIGHT - BOTTOM_ACTION_BAR_HEIGHT;
        }
        // Default max height for unexpanded state
        return 150;
    }, [isExpanded]);

    const { textareaRef, value, setValue, onChange, adjustHeight } = useAutoSizingTextarea({
        maxHeight: getMaxTextareaHeight(), // Pass dynamic max height
    });

    // Effect to re-adjust textarea height when expanded state changes
    useEffect(() => {
        adjustHeight();
    }, [isExpanded, adjustHeight]);


    // Effect to report height when it changes
    useEffect(() => {
        const updateHeight = () => {
            if (inputContainerRef.current) {
                onHeightChange(inputContainerRef.current.offsetHeight);
            }
        };

        updateHeight(); // Report initial height
        window.addEventListener('resize', updateHeight); // Update on resize

        // Use ResizeObserver for more precise height updates
        const observer = new ResizeObserver(updateHeight);
        if (inputContainerRef.current) {
            observer.observe(inputContainerRef.current);
        }

        return () => {
            window.removeEventListener('resize', updateHeight);
            observer.disconnect();
        };
    }, [onHeightChange]);


    const handleSend = useCallback(() => {
        if (value.trim()) {
            onSendMessage(value);
            setValue('');
            adjustHeight(); // Reset textarea height
        }
    }, [value, onSendMessage, setValue, adjustHeight]);

    const handleKeyPress = useCallback((event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Prevent new line
            handleSend();
        }
    }, [handleSend]);

    const toggleExpand = useCallback(() => {
        setIsExpanded((prev) => !prev);
        // The getMaxTextareaHeight hook and useEffect will handle textarea resize
    }, []);


    return (
        // Outer fixed container for the input box
        <div
            ref={inputContainerRef}
            className={`fixed bottom-0 left-0 right-0 mx-auto max-w-3xl p-4 bg-gray-50 dark:bg-gray-900 z-20 transition-all duration-300 ease-in-out`}
            // Set the dynamic height of the input container
            style={{
                height: isExpanded ? `calc(100vh - ${BOTTOM_ACTION_BAR_HEIGHT + TOP_TOGGLE_BAR_HEIGHT + INPUT_VERTICAL_PADDING}px - ${BOTTOM_ACTION_BAR_HEIGHT}px)` : 'auto',
                minHeight: isExpanded ? `calc(100vh - 64px - ${BOTTOM_ACTION_BAR_HEIGHT}px)` : '96px', // Example min height for unexpanded (e.g., 96px for 48px textarea + padding/buttons)
                // If expanded, set max height to fill space up to header
                maxHeight: isExpanded ? `calc(100vh - 64px - ${INPUT_VERTICAL_PADDING / 2}px)` : 'auto', // 64px is header height
                top: isExpanded ? '64px' : 'auto', // Push to top if expanded (64px is header height)
            }}
        >
            <div className="relative border border-gray-300 dark:border-gray-600 rounded-2xl shadow-md flex flex-col h-full overflow-hidden bg-white dark:bg-gray-800">
                {/* Expand/Collapse Toggle (top right, inside the input box) */}
                <button
                    onClick={toggleExpand}
                    className="absolute top-2 right-2 p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 z-10"
                    aria-label={isExpanded ? 'Collapse input' : 'Expand input'}
                >
                    {isExpanded ? <FaCompress size={16} /> : <FaExpand size={16} />}
                </button>

                {/* Textarea (takes up available space) */}
                <textarea
                    ref={textareaRef}
                    value={value}
                    onChange={onChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Message Gemini..."
                    rows={1}
                    className="flex-grow resize-none overflow-y-auto px-4 pt-4 pb-20
                     bg-transparent text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400
                     focus:outline-none focus:ring-0 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent
                     leading-relaxed text-base"
                    style={{ minHeight: '48px' }} // Minimum height for textarea itself
                    disabled={isSending}
                />

                {/* Bottom bar with action buttons */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center px-4 py-2 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl">
                    {/* Plus button (bottom left) */}
                    <button className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 mr-2" aria-label="Add attachment">
                        <FaPlus size={20} />
                    </button>

                    {/* Spacer */}
                    <div className="flex-grow"></div>

                    {/* Microphone and Send buttons (bottom right) */}
                    <button className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 ml-2" aria-label="Voice input">
                        <FaMicrophone size={20} />
                    </button>
                    <button
                        onClick={handleSend}
                        className="ml-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                        disabled={!value.trim() || isSending}
                        aria-label="Send message"
                    >
                        <FaPaperPlane size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatInput;