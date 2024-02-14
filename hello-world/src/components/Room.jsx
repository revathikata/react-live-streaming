import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

// function randomID(len) {
//   let result = '';
//   if (result) return result;
//   var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
//     maxPos = chars.length,
//     i;
//   len = len || 5;
//   for (i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }

// export function getUrlParams(url = window.location.href) {
//   let urlStr = url.split('?')[1];
//   return new URLSearchParams(urlStr);
// }

const Room = () => {
  const { roomId } = useParams();
//   const roomID = getUrlParams().get('roomID') || randomID(5);
//   const myMeeting = useRef(null);

//   useEffect(() => {
    const myMeeting = async (element) => {
        try {
          // generate Kit Token
          const appID = 92933039;
          const serverSecret = '273fc75c9b3beb45d22c436ea50ba107';
          const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,
             Date.now().toString(),"piyosh");
          
          // Create instance object from Kit Token.
          const zp = ZegoUIKitPrebuilt.create(kitToken);
      
          // Check if zp object is valid before calling joinRoom method
          if (zp) {
            // start the call
            zp.joinRoom({
              container: element,
              sharedLinks: [
                {
                  name: 'Personal link',
                  url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomId,
                },
              ],
              scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
              },
            });
          } else {
            console.log('errpr');
            throw new Error('ZegoUIKitPrebuilt object is undefined');
            
          }
        } catch (error) {
          console.error('Error initializing ZegoUIKitPrebuilt:', error);
        }
      };
    // })

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    >{roomId}</div>
  );
};

export default Room;