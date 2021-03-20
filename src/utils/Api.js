import handleOriginalResponse from './utils.js';

class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers
        }).then(handleOriginalResponse);
    }

    getInitialCards() {
        return fetch(`${this.baseUrl}/cards/`, {
            headers: this.headers
        }).then(handleOriginalResponse);
    }

    editProfile(userInfo) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: userInfo.name,
                about: userInfo.about
            })
        }).then(handleOriginalResponse);
    }

    addCard(cardInfo) {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: cardInfo.name,
                link: cardInfo.link
            })
        }).then(handleOriginalResponse);
    }

    deleteCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this.headers,
        }).then(handleOriginalResponse);
    }

    changeLikeCardStatus(cardId, setLike) {
        if (setLike) {
            return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
                method: 'PUT',
                headers: this.headers,
            })
              .then(handleOriginalResponse);
        } else {
            return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
                method: 'DELETE',
                headers: this.headers,
            })
              .then(handleOriginalResponse);
        }
    }

    updateAvatar(avatarLink) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: avatarLink
            })
        }).then(handleOriginalResponse);
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20',
    headers: {
        authorization: 'af47fd49-b31e-4449-b574-1e5cb0a80b14',
        'Content-Type': 'application/json',
    }
})

export default api;