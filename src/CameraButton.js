import React from 'react';
import cameraIcon from './camera_icon.png'; 

function CameraButton({ onCapture }) {
  const handleCameraClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    } catch (error) {
      console.error('Error accessing the camera', error);
    }
  };

  return (
    <button onClick={handleCameraClick} className="camera-button">
      <img src={cameraIcon} alt="Camera" />
    </button>
  );
}

export default CameraButton;
