import {useState, useEffect} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(null);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    useEffect(() => {
        function handleEscClose(evt) {
            if (evt.key === 'Escape') {
                closeAllPopups();
            }
        }
        (isEditProfilePopupOpen || isAddPlacePopupOpen || isEditAvatarPopupOpen || selectedCard) && document.addEventListener('keydown', handleEscClose);

        return () => {
            document.removeEventListener('keydown', handleEscClose);
        }
    }, [isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen, selectedCard]);

    return (
        <div className="page">
            <div className="page__container">
                <Header />
                <Main
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick} />
                <Footer />

                <PopupWithForm
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    name="person"
                    title="Редактировать профиль">
                    <label className="popup popup_type_edit">
                        <input
                            id='name'
                            type='text'
                            minLength='2'
                            maxLength='40'
                            name='name'
                            className='popup__input popup__input_type_name'
                            placeholder="Имя"
                            autoComplete="off"
                            required />
                        <span id='name-error' className='popup__error'/>
                    </label>
                    <label className="popup popup_type_edit">
                        <input
                            id='feature'
                            type='text'
                            minLength='2'
                            maxLength='200'
                            name='feature'
                            className='popup__input popup__input_type_feature'
                            placeholder="Вид деятельности"
                            autoComplete="off"
                            required />
                        <span id='feature-error' className='popup__error'/>
                    </label>
                    <button
                        type='submit'
                        className="button button_type_submit">Сохранить</button>
                </PopupWithForm>
                <PopupWithForm
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    name='place'
                    title='Новое место'>
                    <label className="popup popup_type_add">
                        <input
                            id='place-name'
                            type='text'
                            minLength='2'
                            maxLength='30'
                            name='name'
                            className='popup__input'
                            required
                            placeholder='Название'/>
                        <span id='place-name-error' className='popup__error'/>
                    </label>
                    <label className="popup popup_type_add">
                        <input
                            id='place-link'
                            type='url'
                            name='link'
                            className='popup__input'
                            required
                            placeholder='Ссылка на картинку'/>
                        <span id='place-link-error' className='popup__error'/>
                    </label>
                    <button
                        type='submit'
                        className="button button_type_submit">Создать</button>
                </PopupWithForm>

                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}/>
                <PopupWithForm
                    onClose={closeAllPopups}
                    name="delete-card"
                    title="Вы уверены?" >
                    <button type="button" className="button button_type_submit">Нет</button>
                </PopupWithForm>
                <PopupWithForm
                    isOpened={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    name="update-avatar"
                    title="Обновить аватар" >
                    <label className="popup popup_type_edit-avatar">
                        <input
                        id="edit-avatar"
                        type="url"
                        name="avatar"
                        required
                        className="popup__input"
                        placeholder="Введите ссылку на фото"
                        autoComplete="off"/>
                        <span id='edit-avatar-error' className='popup__error'/>
                    </label>
                    <button type="submit" className="button button_type_submit">Сохранить</button>
                </PopupWithForm>
            </div>
        </div>
    );
}

export default App;
