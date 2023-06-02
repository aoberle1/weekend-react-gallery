import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

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
        {/* <img src="images/goat_small.jpg"/>
        <img src='images/paulie.jpeg' /> */}
        <div className='gallery'>
            {gallery.map(picture => (
              <>
              <img src={picture.path} key={picture.id} />
              <button>Like</button>
              </>
            ))}
        </div>
      </div>
    );
}

export default App;
