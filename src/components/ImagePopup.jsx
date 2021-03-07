function ImagePopup() {
    return (
        <div className="popup popup_type_image">
            <div className="popup__image-wrapper">
                <button className="button button_type_close button_type_close-image" aria-label="Закрыть"/>
                <figure className="popup__figure">
                    <img className="popup__fig-image" src="#" alt="#"/>
                    <figcaption className="popup__fig-caption"/>
                </figure>
            </div>
        </div>
    )
}

export default ImagePopup;