import React, { useEffect } from 'react';

function YouTubePlayer({ videoId }) {
  // Create a reference to the player element
  const playerRef = React.createRef();

  // Load the YouTube Player API
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Create a new YouTube Player
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player(playerRef.current, {
        videoId,
        height: '100%',
        width: '100%',
        border: '1px solid',
        events: {
          onReady: event => {
            // The player is ready
          },
          onStateChange: event => {
            // The player state has changed
          }
        }
      });
    };
  }, [videoId]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%'}}>
      <div ref={playerRef}></div>
    </div>
  );
}

export default YouTubePlayer;