import React, { useState } from 'react';
import YouTube from 'react-youtube';
// intalled  -   npm install react-youtube
const LiveStream = () => {
    const [videoId, setVideoId] = useState('YOUR_VIDEO_ID');
    const startLiveStream = () => {
        // Make API request to start live stream
        // Update videoId with the ID of the live stream
      };
    
      const stopLiveStream = () => {
        // Make API request to stop live stream
        // Update videoId with a default value or a recorded video ID
      };
  return (
    <div>
      <YouTube videoId={videoId} />
      <button onClick={startLiveStream}>Start Live Stream</button>
      <button onClick={stopLiveStream}>Stop Live Stream</button>
    </div>
  )
}

export default LiveStream