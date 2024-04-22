import React, { useState } from 'react';
import CameraButton from './CameraButton';
import GalleryButton from './GalleryButton';
import MenuButton from './MenuButton';
import ImagePlaceholder from './ImagePlaceholder';
import loadingImage from './unicorn-hug.gif';
import downloadIcon from './download-icon.webp'; 
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const downloadImage = () => {
    if (uploadedImageUrl) {
      const link = document.createElement('a');
      link.href = uploadedImageUrl;
      link.download = 'downloaded_image.png'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleImageUpload = (imageUrl) => {
    setLoading(false);
    setUploadedImageUrl(imageUrl);
  };

  const handleSelect = (newImage) => {
    // Implement selection logic
  };

  const handleMenuClick = () => {
    console.log('Menu clicked');
  };



  return (
    <div className="App">
      <header className="App-header">
        <MenuButton onClick={handleMenuClick} />
        Welcoming
      </header>
      {loading ? (
        <div className="loading-container">
          <img src={loadingImage} alt="Loading" />
        </div>
      ) : uploadedImageUrl ? (
        <div className="result-container">
          <div className="image-container">
            <img src={uploadedImageUrl} alt="Result" className="result-image" />
          </div>
          <button onClick={downloadImage} className="download-button">
            <img src={downloadIcon} alt="Download" />
          </button>
        </div>
      ) : (
        <>
          <ImagePlaceholder image={image} />
          <div className="button-container">
            <CameraButton onCapture={handleImageUpload} /> 
            <GalleryButton onSelect={handleSelect} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
