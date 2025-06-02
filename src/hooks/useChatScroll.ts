// src/hooks/useChatScroll.ts
import { useEffect, useRef, useCallback } from 'react';
import { VariableSizeList, VariableSizeListProps } from 'react-window';

export interface CustomVariableSizeList extends VariableSizeList {
    state: {
        scrollOffset: number;
        totalHeight: number;
    };
    props: VariableSizeListProps<any> & {
        height: number;
    };
    scrollToItem: (index: number, align?: 'auto' | 'start' | 'end' | 'center') => void;
}

interface UseChatScrollProps {
    // Allow listRef.current to be null, which is how useRef works
    listRef: React.RefObject<CustomVariableSizeList | null>;
    itemCount: number;
}

export const useChatScroll = ({ listRef, itemCount }: UseChatScrollProps) => {
    const isUserScrolling = useRef(false);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    const scrollToBottom = useCallback(() => {
        // We already have the if (listRef.current) check, which handles the null case
        if (listRef.current) {
            listRef.current.scrollToItem(itemCount, 'end');
        }
    }, [listRef, itemCount]);

    const handleScroll = useCallback(() => {
        const list = listRef.current;
        // We already have the if (list) check
        if (list) {
            const scrollOffset = list.state.scrollOffset;
            const totalHeight = list.state.totalHeight;
            const clientHeight = list.props.height;

            if (totalHeight > clientHeight && scrollOffset < totalHeight - clientHeight - 50) {
                isUserScrolling.current = true;
                if (scrollTimeout.current) {
                    clearTimeout(scrollTimeout.current);
                }
                scrollTimeout.current = setTimeout(() => {
                    isUserScrolling.current = false;
                }, 300);
            } else {
                isUserScrolling.current = false;
            }
        }
    }, [listRef]);

    useEffect(() => {
        if (!isUserScrolling.current) {
            scrollToBottom();
        }
    }, [itemCount, scrollToBottom]);

    return { handleScroll, scrollToBottom };
};