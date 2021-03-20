import {useState, useEffect, useContext} from 'react';
import api from "../utils/Api";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {
    const [cards, setCards] = useState([]);
    const currentUser = useContext(CurrentUserContext);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
          .then(newCard => {
              const newCards = cards.map(c => c._id === card._id ? newCard : c);
              setCards(newCards);
          })
          .catch(err => console.error(err));
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
          .then(() => {
              const newCards = cards.filter(c => c._id !== card._id);
              setCards(newCards);
          })
    }

    useEffect(() => {
        api.getInitialCards()
            .then(initialCards => {
                setCards(initialCards);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <main className="main">
            <div className="profile">
                <div className="profile__avatar-container">
                    <img src={currentUser.avatar} alt={currentUser.name} className="profile__photo"/>
                    <button onClick={props.onEditAvatar} className="profile__edit-avatar"/>
                </div>
                <div className="profile__info">
                    <div className="profile__name-wrap">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button
                            onClick={props.onEditProfile}
                            className="button button_type_edit"
                            aria-label="Редактировать"
                            type="button"/>
                    </div>
                    <p className="profile__feature">{currentUser.about}</p>
                </div>
                <button
                    onClick={props.onAddPlace}
                    className="button button_type_add"
                    aria-label="Добавить фото"
                    type="button"/>
            </div>

            <section className="cards-list">
                    {cards.map(card => (
                        <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
                    ))}
            </section>
        </main>
    )
}

export default Main;