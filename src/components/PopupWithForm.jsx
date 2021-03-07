function PopupWithForm() {
    return (
        <>
            <div className="popup popup_type_edit">
                <div className="popup__container">
                    <button className="button button_type_close " aria-label="Закрыть"/>
                    <h3 className="popup__title">Редактировать профиль</h3>
                    <form name="edit" action="#" className="popup__form" noValidate>
                        <label className="popup__label">
                            <input id="name" name="name" required className="popup__input popup__input_type_name"
                                   type="text"
                                   minLength="2" maxLength="40"/>
                            <span className="popup__error" id="name-error"/>
                        </label>
                        <label className="popup__label">
                            <input id="feature" name="feature" required
                                   className="popup__input popup__input_type_feature"
                                   type="text" minLength="2" maxLength="200"/>
                            <span className="popup__error" id="feature-error"/>
                        </label>
                        <button className="button button_type_submit" type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
            <div className="popup popup_type_submit">
                <div className="popup__container">
                    <button className="button button_type_close" aria-label="Закрыть"/>
                    <h3 className="popup__title">Вы уверены?</h3>
                    <form action="#" className="popup__form" name="confirm-delete" noValidate>
                        <button className="button button_type_submit" type="submit">Да</button>
                    </form>
                </div>
            </div>
            <div className="popup popup_type_add">
                <div className="popup__container">
                    <button className="button button_type_close button_type_close-add" aria-label="Закрыть"/>
                    <h3 className="popup__title">Новое место</h3>
                    <form name="add-card" action="#" className="popup__form" noValidate>
                        <label className="popup__label">
                            <input id="place-name" name="name" required className="popup__input" placeholder="Название"
                                   type="text"
                                   minLength="2" maxLength="30"/>
                            <span className="popup__error" id="place-name-error"/>
                        </label>
                        <label className="popup__label">
                            <input id="place-link" name="link" required className="popup__input"
                                   placeholder="Ссылка на картинку"
                                   type="url"/>
                            <span className="popup__error" id="place-link-error"/>
                        </label>
                        <button className="button button_type_submit" type="submit">Создать</button>
                    </form>
                </div>
            </div>
            <div className="popup popup_type_edit-avatar">
                <div className="popup__container">
                    <button className="button button_type_close" aria-label="Закрыть"/>
                    <h3 className="popup__title">Обновить аватар</h3>
                    <form name="edit-avatar" action="#" className="popup__form" noValidate>
                        <label className="popup__label">
                            <input id="edit-avatar" name="avatar" required className="popup__input"
                                   placeholder="Введите ссылку на фото" type="url"/>
                            <span className="popup__error" id="edit-avatar-error"/>
                        </label>
                        <button className="button button_type_submit" type="submit">Сохранить</button>
                    </form>
                </div>
            </div>

            <template className="card-template">
                <article className="card">
                    <img className="card__image" src="#" alt="#"/>
                    <button className="button button_type_delete" aria-label="Удалить" type="button"/>
                    <div className="card__description">
                        <h2 className="card__name"/>
                        <div className="card__likes">
                            <button className="button button_type_like" aria-label="Лайк" type="button"/>
                            <span className="card__like-counter"/>
                        </div>
                    </div>
                </article>
            </template>
        </>
    )
}

export default PopupWithForm;