import './GalleryItem.css';
import { useState } from 'react';


// passing deconstructed props to show syntax
function GalleryItem ( { picture, addLike } ) {

    console.log(picture.id)

    // state variable created to be used by toggleDisplay function to conditionally display
    // either picture or picture description
   const [display, setDisplay] = useState(false)

   // function to be run when div with class picture-container isClicked
   const toggleDisplay = () => {
        console.log( 'clicked a picture' );
        setDisplay(!display);
   }

    return (
        
        <div className="picture-container">
          {
            // using ternary operator to conditionally display either picture or description of picture when img or text is clicked
            display ? (
                <>
                {/* if value of display variable is true, render this */}
                <p onClick={toggleDisplay}>{picture.description}</p>
                </>
            ) : (
                // if value of display is false, render this
                <>
                <img src={picture.path} onClick={toggleDisplay} className="picture" />
                </>
            )
          }
          </div>
          
    )

}

export default GalleryItem