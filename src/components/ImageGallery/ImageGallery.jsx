import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
    if (!Array.isArray(images)) {
           return null; 
    }
  
    return (
      <div>
        <ul className={s.gallery}>
          {images.map((image) => {
            const { id, likes, user, urls } = image;
            const name = user?.name;
            const small = urls?.small;
            const regular = urls?.regular;
  
            return (
              <li className={s.galleryItem} key={id}>
                <ImageCard
                  name={name}
                  likes={likes}
                  cardPhoto={small}
                  onClick={() => onImageClick(regular)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
export default ImageGallery;

