import React from 'react';

export type AIType =
    | null
    | 'writing'
    | 'coding'
    | 'chatbot'
    | 'education'
    | 'productivity'
    | 'research'
    | 'ui-generation'
    | 'frontend'
    | 'full-stack'
    | 'automation'
    | 'image-generation'
    | 'creative'
    | 'video-generation'
    | 'video-editing'
    | 'organization'
    | 'social-media'
    | 'music-generation'
    | 'graphic-design'
    | 'math'
    | 'meetings'
    | 'scheduling'
    | 'communication'
    | 'developer-tools'
    | '3d-content'
    | 'audio-editing'
    | 'animation';

export const aiTypes: AIType[] = [
    null,
    'writing',
    'coding',
    'chatbot',
    'education',
    'productivity',
    'research',
    'ui-generation',
    'frontend',
    'full-stack',
    'automation',
    'image-generation',
    'creative',
    'video-generation',
    'video-editing',
    'social-media',
    'music-generation',
    'graphic-design',
    'math',
    'meetings',
    'scheduling',
    'communication',
    'developer-tools',
    '3d-content',
    'audio-editing',
    'animation',
];

export const aiTypeOptions: { value: AIType; label: string | undefined }[] = aiTypes.map((type) => ({
    value: type,
    label: type
        ?.split('-')
        ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        ?.join(' ') ?? 'N / A',
}));

interface AITypesProps {
    data: (AIType | string)[];
}

const getColorForType = (type: string | null): string => {
    switch (type) {
        // Creative group
        case 'image-generation':
        case 'video-generation':
        case 'music-generation':
        case '3d-content':
        case 'animation':
        case 'graphic-design':
        case 'creative':
            return 'bg-blue-600';
        // Development group
        case 'coding':
        case 'developer-tools':
        case 'ui-generation':
        case 'frontend':
        case 'full-stack':
            return 'bg-green-600';
        // Productivity group
        case 'productivity':
        case 'automation':
        case 'scheduling':
        case 'meetings':
        case 'organization':
            return 'bg-purple-600';
        // Research/Education group
        case 'research':
        case 'education':
        case 'math':
            return 'bg-indigo-600';
        // Communication group
        case 'chatbot':
        case 'communication':
            return 'bg-teal-600';
        // Social Media group
        case 'social-media':
        case 'video-editing':
            return 'bg-pink-600';
        // Audio group
        case 'audio-editing':
            return 'bg-orange-600';
        default:
            return 'bg-gray-600'; // Fallback for unexpected types
    }
};

const AITypes: React.FC<AITypesProps> = ({ data }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {data.map((type, index) => (
                <span
                    key={`${type}-${index}`}
                    className={`inline-flex items-center px-1.5 py-0.5 text-xs font-semibold text-white rounded-full ${getColorForType(type)}`}
                >
                    {type}
                </span>
            ))}
        </div>
    );
};

export default AITypes;