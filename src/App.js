import React, { useState } from 'react';
import CameraButton from './CameraButton';
import GalleryButton from './GalleryButton';
import ImagePlaceholder from './ImagePlaceholder';
import MenuButton from './MenuButton';
import './App.css';

function App() {
  const [image, setImage] = useState(null);

  const handleCapture = (newImage) => {
    setImage(newImage);
  };

  const handleSelect = (newImage) => {
    setImage(newImage);
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
      <ImagePlaceholder image={image} />
      <div className="button-container">
        <CameraButton onCapture={handleCapture} />
        <GalleryButton onSelect={handleSelect} />
      </div>
    </div>
  );
}

export default App;
