import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {useContext} from "react/cjs/react.production.min";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `button ${isOwn ? 'button_type_delete' : 'button_hidden'}`
  );

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `button ${isLiked ? 'button_type_like-black' : 'button_type_like'}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="card">
      <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <button className="button button_type_delete" aria-label="Удалить" type="button"/>
      <div className="card__description">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__likes">
          <button className="button button_type_like" aria-label="Лайк" type="button"/>
          <span className="card__like-counter">{props.card.likes.length ? props.card.likes.length : ''}</span>
        </div>
      </div>
    </article>
  )
}

export default Card;