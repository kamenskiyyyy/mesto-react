import PopupWithForm from "./PopupWithForm";
import {useState} from 'react';

function AddPlacePopup({isOpen, onClose, onAddPlace, isLoadingButtonText}) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleCardNameChange(evt) {
    setName(evt.target.value);
  }

  function handleCardLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name,
      link
    });
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm
      isOpened={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name='place'
      title='Новое место'
      buttonText={isLoadingButtonText ? 'Сохранение...' : 'Создать'}
    >
      <label className="popup__label">
        <input
          id='place-name'
          value={name}
          onChange={handleCardNameChange}
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
          value={link}
          onChange={handleCardLinkChange}
          type='url'
          name='link'
          className='popup__input'
          required
          placeholder='Ссылка на картинку'/>
        <span id='place-link-error' className='popup__error'/>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;