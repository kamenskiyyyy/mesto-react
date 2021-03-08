import {useState, useEffect} from 'react';
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
            .then(data => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch(err => console.error(err));
    }, []);

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
                    <img src={userAvatar} alt={userName} className="profile__photo"/>
                    <button onClick={props.onEditAvatar} className="profile__edit-avatar"/>
                </div>
                <div className="profile__info">
                    <div className="profile__name-wrap">
                        <h1 className="profile__name">{userName}</h1>
                        <button
                            onClick={props.onEditProfile}
                            className="button button_type_edit"
                            aria-label="Редактировать"
                            type="button"/>
                    </div>
                    <p className="profile__feature">{userDescription}</p>
                </div>
                <button
                    onClick={props.onAddPlace}
                    className="button button_type_add"
                    aria-label="Добавить фото"
                    type="button"/>
            </div>

            <section className="cards-list">
                    {cards.map(card => (
                        <Card key={card._id} card={card} onCardClick={props.onCardClick} />
                    ))}
            </section>
        </main>
    )
}

export default Main;