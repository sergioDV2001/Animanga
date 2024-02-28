import { FC } from 'react';

interface AnimeTextShortProps {
    text: string,
    maxLength: number
}

export const AnimeTextShort: FC<AnimeTextShortProps> = ( text, maxLength ) => {

  const isTruncated = text.synopsis.length > maxLength;

  const truncatedText = isTruncated ? text.slice(0, maxLength) + '...' : text;

  return (
    <div>
      <p className="truncate">{truncatedText}</p>
    </div>
  );
};
