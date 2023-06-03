import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList (props) {

    

    let gallery = props.gallery;

    return (
        <div className='gallery'>
        {gallery.map(picture => (
          <>
          <GalleryItem picture={picture} addLike={props.addLike}/>
          </>
          
        ))}
    </div>
    )

}

export default GalleryList