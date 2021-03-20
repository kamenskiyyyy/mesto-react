import {useState, useEffect} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ConfirmationPopup from "./ConfirmationPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({name: '', about: ''});
  const [deletedCard, setDeletedCard] = useState(null);
  const [cards, setCards] = useState([]);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardDelete(card) {
    setIsConfirmationPopupOpen(true);
    setDeletedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(userInfo) {
    api.editProfile(userInfo)
      .then(data => {
        setCurrentUser({...data});
        closeAllPopups();
      })
      .catch(err => console.error(err));
  }

  function handleUpdateAvatar({avatar}) {
    api.updateAvatar(avatar)
      .then(data => {
        setCurrentUser({...data});
        closeAllPopups();
      })
      .catch(err => console.error(err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        const newCards = cards.map(c => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch(err => console.error(err));
  }

  function handleCardDeleteSubmit(cardId) {
    api.deleteCard(cardId)
      .then(() => {
        const newCards = cards.filter(c => c._id !== cardId);
        setCards(newCards);
        closeAllPopups();
      })
      .catch(err => console.error(err));
  }

  function handleAddPlaceSubmit(cardInfo) {
    api.addCard(cardInfo)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    api.getInitialCards()
      .then(initialCards => {
        setCards(initialCards);
      })
      .catch(err => console.error(err));
  }, []);

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
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer/>

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            buttonText='Сохранить'
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}/>
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}/>
          <ConfirmationPopup
            isOpen={isConfirmationPopupOpen}
            onClose={closeAllPopups}
            onCardDelete={handleCardDeleteSubmit}
            card={deletedCard}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          >
          </EditAvatarPopup>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
