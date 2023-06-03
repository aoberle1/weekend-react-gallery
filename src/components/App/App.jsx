import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header.jsx'


function App() {

  const [gallery, setGallery] = useState([]);

  const addLike = (id) => {
    console.log('clicked Like button!')
    axios.put(`/gallery/like/${id}`).then(response => {
        console.log('testing');
        getGallery();
    }).catch(error => {
        console.log('error in PUT', error)
        alert('Error with PUT', error)
    })
}

  const getGallery = () => {
    axios.get('/gallery').then(response => {
      console.log('Getting gallery', response.data);
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
      <Header />
      <main>
      <p>Gallery goes here</p>
      <GalleryList key={1} gallery={gallery} getGallery={getGallery} addLike={addLike} />
      </main>
    </div>
  );
}

export default App;
