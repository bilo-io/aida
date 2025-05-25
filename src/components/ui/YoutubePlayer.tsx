import React, { useState } from 'react';

interface YouTubePlayerProps {
    url: string;
    className?: string;
}

function parseYouTubeParams(url: string): { videoId?: string; playlistId?: string } {
    try {
        const u = new URL(url);
        const videoId = u.searchParams.get('v') || u.pathname.split('/').pop();
        const playlistId = u.searchParams.get('list');
        return { videoId: videoId || undefined, playlistId: playlistId || undefined };
    } catch {
        return {};
    }
}

export const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ url, className }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const { videoId, playlistId } = parseYouTubeParams(url);

    if (!videoId && !playlistId) {
        return <div>Invalid YouTube URL</div>;
    }

    const thumbnailUrl = videoId
        ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        : undefined;

    const embedUrl = playlistId
        ? videoId
            ? `https://www.youtube.com/embed/${videoId}?autoplay=1&list=${playlistId}`
            : `https://www.youtube.com/embed/videoseries?autoplay=1&list=${playlistId}`
        : `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    return (
        <div className={className}>
            {isPlaying ? (
                <iframe
                    className="w-full aspect-video rounded"
                    src={embedUrl}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            ) : (
                <div
                    className="relative cursor-pointer group w-full aspect-video rounded overflow-hidden"
                    onClick={() => setIsPlaying(true)}
                >
                    {thumbnailUrl ? (
                        <img
                            src={thumbnailUrl}
                            alt="YouTube thumbnail"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-black" />
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition">
                        <svg
                            className="w-16 h-16 text-white opacity-80"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            )}
        </div>
    );
};
