import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList (props) {

    

    let gallery = props.gallery;

    return (
        <div className='gallery'>
        {gallery.map(picture => (
          <>
          <GalleryItem key={picture.id} picture={picture}/>
          <br></br>
            <button onClick={ () => props.addLike(picture.id)}>Like</button>
            <p>Likes: {picture.likes}</p>
          </>
          
        ))}
    </div>
    )

}

export default GalleryList