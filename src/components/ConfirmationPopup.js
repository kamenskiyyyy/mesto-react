import PopupWithForm from "./PopupWithForm";

function ConfirmationPopup({card, isOpen, onClose, onCardDelete, isLoadingButtonText}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onCardDelete(card._id);
  }

  return (
    <PopupWithForm
      isOpened={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="delete-card"
      title="Вы уверены?"
      buttonText={isLoadingButtonText ? 'Удаление...' : 'Да'}
    >
    </PopupWithForm>
  )
}

export default ConfirmationPopup;