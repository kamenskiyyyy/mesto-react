import {useState, useEffect} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ConfirmationPopup from "./ConfirmationPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);        // Стейт попап редактирования профиля открыт
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);              // Стейт попап добавить карточку открыт
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);          // Стейт попап редактирования аватара открыт
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);      // Стейт попап подтверждения удаления карточки открыт
  const [selectedCard, setSelectedCard] = useState(null);                             // Стейт выбранная карточка для передачи картинки карточки в попап
  const [currentUser, setCurrentUser] = useState({name: '', about: ''});              // Стейт данные текущего пользователя
  const [deletedCard, setDeletedCard] = useState(null);                               // Стейт выбранная карточка для удаления
  const [cards, setCards] = useState([]);                                             // Стейт массив карточек
  const [isLoadingCards, setIsLoadingCards] = useState(true);                         // Стейт прелоадер загрузки карточек
  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(true);                   // Стейт прелоадер загрузки информации пользователя
  const [isLoadingButtonText, setIsLoadingButtonText] = useState(false);              // Стейт надпись на кнопке при сохранении контента

  // Обработчик клика по аватару
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  // Обработчик клика по кнопке редактирования профиля
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  // Обработчик клика по кнопке добавить карточку
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  // Обработчик клика по кнопке удалить карточку
  function handleCardDelete(card) {
    setIsConfirmationPopupOpen(true);
    setDeletedCard(card);
  }

  // Функция закрытия всех попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setSelectedCard(null);
  }

  // Обработчик клика по картинке карточки
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  // Обработчик обновления информации пользователя
  function handleUpdateUser(userInfo) {
    setIsLoadingButtonText(true);
    api.editProfile(userInfo)
      .then(data => {
        setCurrentUser({...data});
        closeAllPopups();
      })
      .catch(err => console.error(err))
      .finally(() => {
        setIsLoadingButtonText(false);
      })
  }

  // Обработчик обновления аватара
  function handleUpdateAvatar({avatar}) {
    setIsLoadingButtonText(true);
    api.updateAvatar(avatar)
      .then(data => {
        setCurrentUser({...data});
        closeAllPopups();
      })
      .catch(err => console.error(err))
      .finally(() => {
        setIsLoadingButtonText(false);
      })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        setCards(cards => cards.map(c => c._id === card._id ? newCard : c));
      })
      .catch(err => console.error(err));
  }

  // Обработчик подтверждения удаления карточки
  function handleCardDeleteSubmit(cardId) {
    setIsLoadingButtonText(true);
    api.deleteCard(cardId)
      .then(() => {
        setCards(cards.filter(c => c._id !== cardId));
        closeAllPopups();
      })
      .catch(err => console.error(err))
      .finally(() => {
        setIsLoadingButtonText(false);
      })
  }

  // Обработчик добавления карточки
  function handleAddPlaceSubmit(cardInfo) {
    setIsLoadingButtonText(true);
    api.addCard(cardInfo)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.error(err))
      .finally(() => {
        setIsLoadingButtonText(false);
      })
  }

  // Загрузка карточек по умолчанию
  useEffect(() => {
    api.getInitialCards()
      .then(initialCards => {
        setCards(initialCards);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setIsLoadingCards(false);
      })
  }, []);

  // Добавить/удалить слушателя нажатия Esc при открытии попапа
  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    (isEditProfilePopupOpen || isAddPlacePopupOpen || isEditAvatarPopupOpen || isConfirmationPopupOpen || selectedCard) && document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  }, [isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen, isConfirmationPopupOpen, selectedCard]);

  // Загрузка данных пользователя
  useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setCurrentUser({...data});
      })
      .catch(err => console.error(err))
      .finally(() => {
        setIsLoadingUserInfo(false);
      })
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header/>
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
            isLoadingCards={isLoadingCards}
            isLoadingUserInfo={isLoadingUserInfo}
          />
          <Footer/>
          {/*Попап редактировать профиль*/}
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            buttonText='Сохранить'
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            isLoadingButtonText={isLoadingButtonText}/>
          {/*Попап добавить карточку*/}
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
            isLoadingButtonText={isLoadingButtonText}/>
          {/*Попап картинка*/}
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}/>
          {/*Попап удаления карточки*/}
          <ConfirmationPopup
            isOpen={isConfirmationPopupOpen}
            onClose={closeAllPopups}
            onCardDelete={handleCardDeleteSubmit}
            card={deletedCard}
            isLoadingButtonText={isLoadingButtonText}/>
          {/*Попап обновить аватар*/}
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            isLoadingButtonText={isLoadingButtonText}/>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
