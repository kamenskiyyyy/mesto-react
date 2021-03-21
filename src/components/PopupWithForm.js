function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpened && 'popup_opened'}`} onClick={(e) => { if (e.target.classList.contains('popup')) props.onClose() }}>
            <div className="popup__container">
                <button
                    className="button button_type_close "
                    aria-label="Закрыть"
                    onClick={props.onClose}/>
                <h2 className="popup__title">{props.title}</h2>
                <form name={props.name} action="#" className="popup__form" onSubmit={props.onSubmit} noValidate>
                    {props.children}
                    <button
                        type='submit'
                        className="button button_type_submit">{props.buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;