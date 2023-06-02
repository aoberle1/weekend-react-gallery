import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList (props) {

    let gallery = props.gallery;

    return (
        <div className='gallery'>
        {gallery.map(picture => (
          <>
          <GalleryItem key={picture.id} picture={picture}/>
          </>
          
        ))}
    </div>
    )

}

export default GalleryList