import {CurrentUserContext} from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
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
    props.onUpdateUser({
      name,
      about: description
    })
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      isOpened={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="person"
      title="Редактировать профиль"
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
        />
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
      <button
        type='submit'
        className="button button_type_submit">{props.buttonText}</button>
    </PopupWithForm>
  )
}

export default EditProfilePopup;