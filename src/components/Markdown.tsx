// src/components/MarkdownRenderer.tsx
import React, { useEffect, useRef } from 'react';
import { marked } from 'marked';
import type { MarkedExtension, Renderer } from 'marked';
import hljs from 'highlight.js'; // Ensure this is imported

interface MarkdownRendererProps {
    content: string;
    className?: string;
}

class CustomRenderer extends marked.Renderer {
    code({ text, lang }: { text: string; lang?: string }): string {
        const code = text;
        const language = lang && hljs.getLanguage(lang) ? lang : 'plaintext';
        // hljs.highlight returns HTML string with classes like "hljs" and "language-xxx"
        const highlightedCode = hljs.highlight(code, { language: language }).value;

        return `
      <div class="relative my-4 rounded-lg overflow-hidden bg-gray-800 dark:bg-gray-900 shadow-md">
        <div class="flex justify-between items-center px-4 py-2 bg-gray-700 dark:bg-gray-900 text-gray-200 text-xs font-mono">
          <span class="capitalize">${validLanguage}</span>
          <button class="copy-button flex items-center space-x-1 p-1 rounded hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-200" aria-label="Copy code to clipboard">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg>
            <span class="text-sm">Copy code</span>
          </button>
        </div>
        <pre class="!p-4 !m-0 overflow-x-auto text-sm"><code>${highlightedCode}</code></pre>
      </div>
    `;
    }
}

const customRendererInstance = new CustomRenderer();

marked.use({ renderer: customRendererInstance, gfm: true, breaks: true });


const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            // The hljs.highlight() call in the custom renderer already injects the necessary classes.
            // hljs.highlightElement() would only be needed if the HTML wasn't pre-processed this way.
            // So, no need to call hljs.highlightElement here for code blocks.

            // Attach click listeners for copy buttons (this logic remains crucial here)
            containerRef.current.querySelectorAll('.copy-button').forEach(button => {
                const preCodeElement = button.closest('.relative')?.querySelector('pre code');
                if (preCodeElement) {
                    const codeToCopy = preCodeElement.textContent || '';

                    // Clone to remove existing listeners and reattach
                    const newButton = button.cloneNode(true) as HTMLElement;
                    button.parentNode?.replaceChild(newButton, button);

                    newButton.addEventListener('click', async () => {
                        try {
                            await navigator.clipboard.writeText(codeToCopy);
                            newButton.innerHTML = '<svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-sm text-green-400">Copied!</span>';
                            setTimeout(() => {
                                newButton.innerHTML = '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg><span class="text-sm">Copy code</span>';
                            }, 2000);
                        } catch (err) {
                            console.error('Failed to copy text: ', err);
                        }
                    });
                }
            });
        }
    }, [content]);

    const parsedHtml = marked.parse(content || '') as string;

    return (
        <div
            ref={containerRef}
            className={`markdown-content prose dark:prose-invert max-w-none ${className || ''}`}
            dangerouslySetInnerHTML={{ __html: parsedHtml }}
        />
    );
};

export default MarkdownRenderer;