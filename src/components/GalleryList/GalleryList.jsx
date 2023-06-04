import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css';


function GalleryList (props) {

    // setting props equal to variable without deconstructing
    let gallery = props.gallery;

    return (
        <div className='gallery'>
        {gallery.map(picture => (
            // tried className in naked element changed to div, renders double backgrounds slightly off-center of each other, buries likes button and likes total
          <>
          <GalleryItem className="picture-container" key={picture.id} picture={picture}/>
          {/* using props.addLike to show syntax of props. without deconstructing */}
            <button onClick={ () => props.addLike(picture.id)}>Like</button>
            <p>Likes: {picture.likes}</p>
          </>
          
        ))}
    </div>
    )

}

export default GalleryList