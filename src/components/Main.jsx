function Main() {
    function handleEditAvatarClick() {
        document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
    }
    
    function handleEditProfileClick() {
        document.querySelector('.popup_type_edit').classList.add('popup_opened');
    }

    function handleAddPlaceClick() {
        document.querySelector('.popup_type_add').classList.add('popup_opened');
    }

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src="#" alt="Аватар" className="profile__photo"/>
                    <button onClick={handleEditAvatarClick} className="profile__edit-avatar"/>
                </div>
                <div className="profile__info">
                    <div className="profile__name-wrap">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button onClick={handleEditProfileClick} className="button button_type_edit" aria-label="Редактировать" type="button"/>
                    </div>
                    <p className="profile__feature">Исследователь океана</p>
                </div>
                <button onClick={handleAddPlaceClick} className="button button_type_add" aria-label="Добавить фото" type="button"/>
            </section>
            <section className="cards-list">
            </section>
        </main>
    )
}

export default Main;