import './GalleryItem.css';


function GalleryItem (props) {

    let picture = props.picture;

    return (
        <div className="picture-container">
          <img src={picture.path} className="picture" key={picture.id} />
          <br></br>
          <button>Like</button>
          <p>Likes: {picture.likes}</p>
          </div>
    )

}

export default GalleryItem