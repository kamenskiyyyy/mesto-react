import {useContext} from 'react';
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import Preloader from "./Preloader";

function Main({
                cards,
                isLoadingCards,
                isLoadingUserInfo,
                onEditAvatar,
                onEditProfile,
                onAddPlace,
                onCardClick,
                onCardLike,
                onCardDelete
              }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <div className="profile">
        <div className="profile__avatar-container">
          <img src={currentUser.avatar} alt={currentUser.name} className="profile__photo"/>
          <button onClick={onEditAvatar} className="profile__edit-avatar"/>
        </div>
        <div className="profile__info">
          <div className="profile__name-wrap">
            <div
              className={`preloader preloader_type_text preloader_type_text-long ${!isLoadingUserInfo && 'preloader_hidden'}`}/>
            <h1 className="profile__name">{currentUser.name}</h1>
            <div
              className={`preloader preloader_type_text preloader_type_text-short ${!isLoadingUserInfo && 'preloader_hidden'}`}/>
            <button
              onClick={onEditProfile}
              className="button button_type_edit"
              aria-label="Редактировать"
              type="button"/>
          </div>
          <p className="profile__feature">{currentUser.about}</p>
        </div>
        <button
          onClick={onAddPlace}
          className="button button_type_add"
          aria-label="Добавить фото"
          type="button"/>
      </div>
      {/*Индикатор загрузки карточек*/}
      {isLoadingCards  &&  <Preloader className={`preloader preloader_type_image lds-ripple`}/>}

      <section className="cards-list">
        {cards.map(card => (
          <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike}
                onCardDelete={onCardDelete}/>
        ))}
      </section>
    </main>
  )
}

export default Main;