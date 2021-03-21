import PopupWithForm from "./PopupWithForm";
import {useRef} from "react";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, isLoadingButtonText}) {
  const inputAvatar = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: inputAvatar.current.value
    });
    inputAvatar.current.value = '';
  }

  return (
    <PopupWithForm
      isOpened={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="update-avatar"
      title="Обновить аватар"
      buttonText={isLoadingButtonText ? 'Сохранение...' : 'Сохранить'}
    >
      <label className="popup__label">
        <input
          id="edit-avatar"
          type="url"
          ref={inputAvatar}
          name="avatar"
          required
          className="popup__input"
          placeholder="Введите ссылку на фото"
          autoComplete="off"/>
        <span id='edit-avatar-error' className='popup__error'/>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;