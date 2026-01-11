'use client';

interface WPContentProps {
  content: string;
  className?: string;
}

export default function WPContent({ content, className = '' }: WPContentProps) {
  return (
    <div
      className={`wp-content prose prose-lg max-w-none
        prose-headings:font-bold prose-headings:text-gray-900
        prose-p:text-gray-700 prose-p:leading-relaxed
        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
        prose-img:rounded-lg prose-img:shadow-lg
        prose-strong:text-gray-900
        ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
