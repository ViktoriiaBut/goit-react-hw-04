import s from "./ImageCard.module.css";

const ImageCard = ({ name, likes, cardPhoto, onClick }) => {
 return (
<div className={s.imageCardWrapper} onClick={onClick}>
  <img src={cardPhoto} className={s.imageCard} alt={name} />
  <div className={s.imageInfo}>
    <p>{name}</p>
    <p>❤️ {likes}</p>
  </div>
  </div>
 );
};

export default ImageCard;

