// src/components/WistiaPlayer.tsx

import '@wistia/wistia-player';
import { useEffect } from 'react';

// Define the props the component will accept
interface WistiaPlayerProps {
  mediaId: string;
}

const WistiaPlayer = ({ mediaId }: WistiaPlayerProps) => {
  useEffect(() => {
    // Check if the main player script is already on the page to avoid adding it multiple times
    if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
      const wistiaPlayerScript = document.createElement('script');
      wistiaPlayerScript.src = 'https://fast.wistia.com/player.js';
      wistiaPlayerScript.async = true;
      document.body.appendChild(wistiaPlayerScript);
    }

    // This script is unique to each video, so we use the mediaId prop
    const wistiaEmbedScript = document.createElement('script');
    wistiaEmbedScript.src = `https://fast.wistia.com/embed/${mediaId}.js`;
    wistiaEmbedScript.async = true;
    wistiaEmbedScript.id = `wistia-embed-${mediaId}`; // Give it a unique ID for cleanup
    document.body.appendChild(wistiaEmbedScript);

    // The style is also unique to each video
    const wistiaStyle = document.createElement('style');
    wistiaStyle.id = `wistia-style-${mediaId}`; // Unique ID for cleanup
    wistiaStyle.innerHTML = `
      wistia-player[media-id='${mediaId}']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top: 56.25%; 
      }
    `;
    document.head.appendChild(wistiaStyle);

    // Cleanup function to remove the specific script and style for this video instance
    return () => {
      const embedScript = document.getElementById(`wistia-embed-${mediaId}`);
      const styleElement = document.getElementById(`wistia-style-${mediaId}`);
      if (embedScript) document.body.removeChild(embedScript);
      if (styleElement) document.head.removeChild(styleElement);
    };
  }, [mediaId]); // Re-run the effect if the mediaId changes

  return (
    <wistia-player
      media-id={mediaId}
      seo="false"
      aspect="1.7777777777777777"
    ></wistia-player>
  );
};

export default WistiaPlayer;