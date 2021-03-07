import {useState} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleImageClick() {
        document.querySelector('.popup_type_image').classList.add('popup_opened');
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
    }

    return (
        <div className="page">
            <div className="page__container">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onImageClick={handleImageClick} />
                <Footer />

                <PopupWithForm isOpen={isEditProfilePopupOpen && 'popup_opened'} onClose={closeAllPopups} name="person" title="Редактировать профиль">
                    <div className="popup popup_type_edit">
                        <input
                            id='name'
                            type='text'
                            minLength='2'
                            maxLength='40'
                            name='name'
                            className='popup__input popup__input_type_name'
                            required />
                        <span id='name-error' className='popup__error'/>
                    </div>
                    <div className="popup popup_type_edit">
                        <input
                            id='feature'
                            type='text'
                            minLength='2'
                            maxLength='200'
                            name='feature'
                            className='popup__input popup__input_type_feature'
                            required />
                        <span id='feature-error' className='popup__error'/>
                    </div>
                    <button
                        type='submit'
                        className="button button_type_submit">Сохранить</button>
                </PopupWithForm>
                <PopupWithForm isOpen={isAddPlacePopupOpen && 'popup_opened'} onClose={closeAllPopups} name='place' title='Новое место'>
                    <div className="popup popup_type_add">
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
                    </div>
                    <div className="popup popup_type_add">
                        <input
                            id='place-link'
                            type='url'
                            name='link'
                            className='popup__input'
                            required
                            placeholder='Ссылка на картинку'/>
                        <span id='place-link-error' className='popup__error'/>
                    </div>
                    <button
                        type='submit'
                        className="button button_type_submit">Создать</button>
                </PopupWithForm>

                <ImagePopup />
            </div>
        </div>
    );
}

export default App;
