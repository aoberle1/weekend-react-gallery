import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [gallery, setGallery] = useState([]);

  const getGallery = () => {
    axios.get('/gallery').then(response => {
      console.log('Getting gallery');
      setGallery(response.data)
    }).catch(error => {
      console.log('Error in GET:', error)
      alert('Error with GET response:', error)
    })
  };

  useEffect(() => {
    getGallery();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <GalleryList gallery={gallery} />
    </div>
  );
}

export default App;
