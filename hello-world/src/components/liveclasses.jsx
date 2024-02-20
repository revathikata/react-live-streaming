import React, { useEffect, useRef } from 'react';
import SimplePeer from 'simple-peer';
// npm install simple-peer

const Liveclasses = () => {
    const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  let peer = null;
  useEffect(() => {
    // Access user's media devices
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        // Display local video stream
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }

        // Initialize peer connection
        peer = new SimplePeer({ initiator: true, stream });

        // Handle peer events
        peer.on('signal', data => {
          // Send signaling data to the remote peer
        });

        peer.on('stream', remoteStream => {
          // Display remote video stream
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = remoteStream;
          }
        });
      })
      .catch(error => console.error('Error accessing media devices:', error));

    return () => {
      if (peer) {
        peer.destroy();
      }
    };
    
  }, []);
  return (
    <div>
         <h1>Live Class</h1>
      <div>
        <h2>Your Video</h2>
        <video ref={localVideoRef} autoPlay playsInline muted />
      </div>
      <div>
        <h2>Teacher's Video</h2>
        <video ref={remoteVideoRef} autoPlay playsInline />
      </div>
    </div>
  )
}

export default Liveclasses