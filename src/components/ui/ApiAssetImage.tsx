import React from 'react';

const apiAssetUrls = import.meta.glob(
  [
    '/src/assets/icons/faction_laws/*.png',
    '/src/assets/icons/cities_buildings/**/*.png',
    '/src/assets/icons/hero_magics/*.png',
  ],
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
) as Record<string, string>;

interface ApiAssetImageProps {
  iconPath?: string;
  alt: string;
  className?: string;
}

export const ApiAssetImage: React.FC<ApiAssetImageProps> = ({
  iconPath,
  alt,
  className = '',
}) => {
  if (!iconPath) return null;

  const normalizedPath = iconPath
    .replace(/^\/?src\/assets\//, '')
    .replace(/^\/?/, '')
    .replace(/^icons\/fraction_laws\//, 'icons/faction_laws/');
  const assetUrl = apiAssetUrls[`/src/assets/${normalizedPath.endsWith('.png') ? normalizedPath : `${normalizedPath}.png`}`];

  if (!assetUrl) return null;

  return (
    <img
      src={assetUrl}
      alt={alt}
      loading="lazy"
      className={className}
    />
  );
};

export default ApiAssetImage;
