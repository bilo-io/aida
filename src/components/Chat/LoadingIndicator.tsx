'use client';
// src/components/chat/LoadingIndicator.tsx
import React from 'react';

const LoadingIndicator: React.FC = () => {
    return (
        <div className="flex items-center space-x-1.5 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 w-fit animate-pulse">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
    );
};

export default LoadingIndicator;