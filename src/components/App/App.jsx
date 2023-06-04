import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header.jsx'


function App() {

  // state variable used by getGallery function to set gallery variable and render variable (array of objects) to DOM
  const [gallery, setGallery] = useState([]);


  // put request function using the id of the picture connected to the like button clicked for targeting
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

  // get request function called upon page load and upon like button click (addLike)
  const getGallery = () => {
    axios.get('/gallery').then(response => {
      console.log('Getting gallery', response.data);
      setGallery(response.data)
    }).catch(error => {
      console.log('Error in GET:', error)
      alert('Error with GET response:', error)
    })
  };

  // useEffect will run getGallery once after page render
  useEffect(() => {
    getGallery();
  }, []);

  // what will be rendered to DOM goes here
  return (
    <div className="App">
      {/* Header component */}
      <Header />
      <main>
      <p>Gallery goes here</p>
      {/* key is nonsense, tried key={various forms of thing.id} in many places to get key error to go away */}
      {/* GalleryList component - props are gallery variable, getGallery function, and addLike function */}
      <GalleryList key={1} gallery={gallery} getGallery={getGallery} addLike={addLike} />
      </main>
    </div>
  );
}

export default App;
