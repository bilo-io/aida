// src/components/chat/ChatContainer.tsx
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

interface Message {
    id: string;
    text: string; // text will now always be Markdown for AI responses
    sender: 'user' | 'ai';
}

const ChatContainer: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isThinking, setIsThinking] = useState<boolean>(false);
    const [inputHeight, setInputHeight] = useState<number>(0);
    const messageIdCounter = useRef(0);

    const simulateAiResponse = useCallback(async (userMessage: string) => {
        setIsThinking(true);
        await new Promise((resolve) => setTimeout(() => resolve(null), 1000 + Math.random() * 1000));

        // AI response will always be Markdown
        // Using a four-backtick fence (````) for code blocks ensures robustness
        // even if the code itself contains three backticks (```).
        const responseText = `I received your message: "${userMessage}". As a master-level engineer, I'm here to provide solid, reusable, and carefully structured solutions.

Here's an example of a **React component** structure with TypeScript:

\`\`\`\`typescript
import React from 'react';

interface MyComponentProps {
  name: string;
  count: number;
}

const MyComponent: React.FC<MyComponentProps> = ({ name, count }) => {
  return (
    <div className="my-custom-component">
      <h2>Hello, \`\${name}\`!</h2> {/* Example of a backtick inside the code */}
      <p>You have clicked \`\${count}\` times.</p> {/* Example of three backticks inside the code */}
      <button onClick={() => console.log(\`Clicked \${name}\`)}>
        Click Me
      </button>
    </div>
  );
};

export default MyComponent;
\`\`\`\`

### Architecture Principles

* **Simplicity**: Keep components focused and easy to understand.
* **Reusability**: Design for modularity so parts can be used elsewhere.
* **Type Safety**: Leverage TypeScript extensively for robust code.

Let me know if you need any more refined code examples or architectural guidance!`;

        setMessages((prevMessages) => [
            ...prevMessages,
            {
                id: `ai-${messageIdCounter.current++}`,
                text: responseText,
                sender: 'ai',
            },
        ]);
        setIsThinking(false);
    }, []);

    const handleSendMessage = useCallback((text: string) => {
        if (!text.trim()) return;

        const newMessage: Message = {
            id: `user-${messageIdCounter.current++}`,
            text: text.trim(),
            sender: 'user',
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        simulateAiResponse(text);
    }, [simulateAiResponse]);

    // Initial greeting message (optional, also in Markdown now)
    useEffect(() => {
        setMessages([
            { id: 'ai-welcome', text: 'Hello! How can I assist you today as your **master-level** software engineer?', sender: 'ai' },
        ]);
    }, []);

    const handleInputHeightChange = useCallback((height: number) => {
        setInputHeight(height);
    }, []);

    return (
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 relative">
            <header className="p-4 bg-white dark:bg-gray-800 shadow-md text-center text-xl font-bold border-b border-gray-200 dark:border-gray-700 z-10">
                AI Chat Interface
            </header>
            <main className="flex-1 flex flex-col overflow-hidden">
                <ChatWindow messages={messages} isThinking={isThinking} inputHeight={inputHeight} />
            </main>
            <ChatInput
                onSendMessage={handleSendMessage}
                isSending={isThinking}
                onHeightChange={handleInputHeightChange}
            />
        </div>
    );
};

export default ChatContainer;