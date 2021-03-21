import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {useContext} from "react";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `button ${isOwn ? 'button_type_delete' : 'button_hidden'}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `button ${isLiked ? 'button_type_like-black' : 'button_type_like'}`
  );

  function handleImageClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card)
  }

  return (
    <article className="card">
      <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleImageClick}/>
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} aria-label="Удалить" type="button"/>
      <div className="card__description">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__likes">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} aria-label="Лайк" type="button"/>
          <span className="card__like-counter">{props.card.likes.length ? props.card.likes.length : ''}</span>
        </div>
      </div>
    </article>
  )
}

export default Card;