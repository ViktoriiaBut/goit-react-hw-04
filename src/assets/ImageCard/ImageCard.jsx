import s from "./ImageCard.module.css";

const ImageCard = ({ name, likes, cardPhoto, onClick }) => {
 return (
<div className={s.imageCardWrapper} onClick={() => onClick({name, likes})}>
  <img src={cardPhoto} className={s.imageCard} alt={name}/>
  </div>
 );
};

export default ImageCard;