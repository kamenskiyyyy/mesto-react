function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="card">
            <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
            <button className="button button_type_delete" aria-label="Удалить" type="button"/>
            <div className="card__description">
                <h2 className="card__name">{props.card.name}</h2>
                <div className="card__likes">
                    <button className="button button_type_like" aria-label="Лайк" type="button"/>
                    <span className="card__like-counter">{props.card.likes.length ? props.card.likes.length : ''}</span>
                </div>
            </div>
        </article>
    )
}

export default Card;