// src/hooks/useAutoSizingTextarea.ts
import { useEffect, useRef, useState, useCallback } from 'react';

interface UseAutoSizingTextareaProps {
    initialValue?: string;
    maxHeight?: number; // Optional max height in pixels
}

export const useAutoSizingTextarea = ({ initialValue = '', maxHeight }: UseAutoSizingTextareaProps = {}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [value, setValue] = useState(initialValue);

    const adjustHeight = useCallback(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto'; // Reset height to recalculate
            let newHeight = textarea.scrollHeight;

            if (maxHeight && newHeight > maxHeight) {
                newHeight = maxHeight;
                textarea.style.overflowY = 'auto'; // Enable scrolling if max height is reached
            } else {
                textarea.style.overflowY = 'hidden'; // Hide scrollbar if not needed
            }
            textarea.style.height = `${newHeight}px`;
        }
    }, [maxHeight]);

    useEffect(() => {
        adjustHeight();
    }, [value, adjustHeight]); // Recalculate height whenever value changes

    const onChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    }, []);

    return { textareaRef, value, setValue, onChange, adjustHeight };
};