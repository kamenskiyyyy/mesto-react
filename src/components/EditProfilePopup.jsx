import {CurrentUserContext} from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import {useContext, useEffect, useState} from "react";

function EditProfilePopup({isOpen, onClose, onUpdateUser, isLoadingButtonText}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      isOpened={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="person"
      title="Редактировать профиль"
      buttonText={isLoadingButtonText ? 'Сохранение...' : 'Сохранить'}
    >
      <label className="popup__label">
        <input
          id='name'
          type='text'
          value={name}
          onChange={handleChangeName}
          minLength='2'
          maxLength='40'
          name='name'
          className='popup__input popup__input_type_name'
          placeholder="Имя"
          autoComplete="off"
          required/>
        <span id='name-error' className='popup__error'/>
      </label>
      <label className="popup__label">
        <input
          id='feature'
          type='text'
          value={description}
          onChange={handleChangeDescription}
          minLength='2'
          maxLength='200'
          name='feature'
          className='popup__input popup__input_type_feature'
          placeholder="Вид деятельности"
          autoComplete="off"
          required/>
        <span id='feature-error' className='popup__error'/>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;