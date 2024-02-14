import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

export const VideoRecorder = () => {
    const webcamRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [capturing, setCapturing] = useState(false);
    const [recordedChunks, setRecordedChunks] = useState([]);
    const startCapture = () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
          webcamRef.current.video.srcObject = stream;
          mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: 'video/webm' });
    
          mediaRecorderRef.current.ondataavailable = (e) => {
            if (e.data.size > 0) {
              setRecordedChunks((prev) => prev.concat(e.data));
            }
          };
    
          mediaRecorderRef.current.onstop = () => {
            stream.getTracks().forEach(track => track.stop());
          };
    
          mediaRecorderRef.current.start();
          setCapturing(true);
        });
      };
    
      const stopCapture = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
          mediaRecorderRef.current.stop();
          setCapturing(false);
        }
      };
    
      const handleDownload = () => {
        if (recordedChunks.length) {
          const blob = new Blob(recordedChunks, { type: 'video/webm' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          document.body.appendChild(a);
          a.style = 'display: none';
          a.href = url;
          a.download = 'video.webm';
          a.click();
          window.URL.revokeObjectURL(url);
          setRecordedChunks([]);
        }
      };
  return (
    <div>
       <Webcam audio={true} ref={webcamRef}   width='100%'/>
      <div>
        {capturing ? (
          <button onClick={stopCapture}>Stop Recording</button>
        ) : (
          <button onClick={startCapture}>Start Recording</button>
        )}
        {recordedChunks.length > 0 && (
          <button onClick={handleDownload}>Download</button>
        )}
      </div>
    </div>
  )
}
export default VideoRecorder