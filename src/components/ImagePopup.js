function ImagePopup(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.card && 'popup_opened'}`} onClick={(e) => {
      if (e.target.classList.contains('popup')) props.onClose()
    }}>
      <div className="popup__image-wrapper">
        <button
          className="button button_type_close button_type_close-image"
          aria-label="Закрыть"
          onClick={props.onClose}/>
        <figure className="popup__figure">
          <img className="popup__fig-image" src={props.card && props.card.link} alt={props.card && props.card.name}/>
          <figcaption className="popup__fig-caption">{props.card && props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;