import './GalleryItem.css';
import { useState } from 'react';
import axios from 'axios';


function GalleryItem ( { picture, addLike } ) {

    console.log(picture.id)



   const [display, setDisplay] = useState(false)

   const toggleDisplay = () => {
        console.log( 'clicked a picture' );
        setDisplay(!display);
   }

    return (
        
        <div key={picture.id} className="picture-container">
          {/* <img src={picture.path} onClick={toggleDisplay} className="picture" />
          <br></br>
          <button onClick={ () => addLike(picture.id)}>Like</button>
          <p>Likes: {picture.likes}</p> */}
          {
            display ? (
                <>
                <p onClick={toggleDisplay}>{picture.description}</p>
                <br></br>
                <button onClick={ () => addLike(picture.id)}>Like</button>
                <p>Likes: {picture.likes}</p>
                </>
            ) : (
                <>
                <img src={picture.path} onClick={toggleDisplay} className="picture" />
                <br></br>
                <button onClick={ () => addLike(picture.id)}>Like</button>
                <p>Likes: {picture.likes}</p>
                </>
            )
          }
          </div>
          
    )

}

export default GalleryItem