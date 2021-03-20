import PopupWithForm from "./PopupWithForm";

const {useRef} = require("react/cjs/react.production.min");

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const inputAvatar = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: inputAvatar.current.value
    });
    setTimeout(() => {
      inputAvatar.current.value = ''
    }, 1000);
  }

  return (
    <PopupWithForm
      isOpened={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="update-avatar"
      title="Обновить аватар"
      buttonText='Сохранить'
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