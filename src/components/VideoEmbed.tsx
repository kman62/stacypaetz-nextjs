'use client';

interface VideoEmbedProps {
  url: string;
  title?: string;
  className?: string;
}

function getVideoId(url: string): { type: 'youtube' | 'vimeo' | 'unknown'; id: string } {
  // YouTube
  const youtubeMatch = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  if (youtubeMatch) {
    return { type: 'youtube', id: youtubeMatch[1] };
  }

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(?:.*\/)?(\d+)/);
  if (vimeoMatch) {
    return { type: 'vimeo', id: vimeoMatch[1] };
  }

  return { type: 'unknown', id: '' };
}

export default function VideoEmbed({ url, title = 'Video', className = '' }: VideoEmbedProps) {
  const { type, id } = getVideoId(url);

  if (type === 'unknown' || !id) {
    return (
      <div className={`bg-gray-200 rounded-lg p-8 text-center ${className}`}>
        <p className="text-gray-600">Video unavailable</p>
      </div>
    );
  }

  const embedUrl =
    type === 'youtube'
      ? `https://www.youtube.com/embed/${id}?rel=0`
      : `https://player.vimeo.com/video/${id}`;

  return (
    <div className={`relative w-full aspect-video ${className}`}>
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
      />
    </div>
  );
}
