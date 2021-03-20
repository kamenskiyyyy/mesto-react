import {useState, useEffect} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({name: '', about: ''});

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

  function handleUpdateUser() {
    api.editProfile(userInfo)
      .then(data => {
        setCurrentUser({...data});
        closeAllPopups();
      })
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

  useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setCurrentUser({...data});
      })
      .catch(err => console.error(err));
  })

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header/>
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}/>
          <Footer/>

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            buttonText='Сохранить'
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            />
          <PopupWithForm
            isOpened={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            name='place'
            title='Новое место'
            buttonText='Создать'>
            <label className="popup__label">
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
            <label className="popup__label">
              <input
                id='place-link'
                type='url'
                name='link'
                className='popup__input'
                required
                placeholder='Ссылка на картинку'/>
              <span id='place-link-error' className='popup__error'/>
            </label>
          </PopupWithForm>

          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}/>
          <PopupWithForm
            onClose={closeAllPopups}
            name="delete-card"
            title="Вы уверены?"
            buttonText='Нет'>
          </PopupWithForm>
          <PopupWithForm
            isOpened={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            name="update-avatar"
            title="Обновить аватар"
            buttonText='Сохранить'>
            <label className="popup__label">
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
          </PopupWithForm>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
