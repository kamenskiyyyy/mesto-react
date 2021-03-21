(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(7),r=a.n(o),s=(a(15),a(10)),i=a(5),l=a(2),u=a.p+"static/media/logo.a307e1c4.svg",d=a(0);var p=function(e){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("img",{className:"header__logo",src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})})},b=c.a.createContext();var j=function(e){var t=Object(n.useContext)(b),a=e.card.owner._id===t._id,c="button ".concat(a?"button_type_delete":"button_hidden"),o=e.card.likes.some((function(e){return e._id===t._id})),r="button ".concat(o?"button_type_like-black":"button_type_like");return Object(d.jsxs)("article",{className:"card",children:[Object(d.jsx)("img",{className:"card__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(d.jsx)("button",{className:c,onClick:function(){e.onCardDelete(e.card)},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",type:"button"}),Object(d.jsxs)("div",{className:"card__description",children:[Object(d.jsx)("h2",{className:"card__name",children:e.card.name}),Object(d.jsxs)("div",{className:"card__likes",children:[Object(d.jsx)("button",{className:r,onClick:function(){e.onCardLike(e.card)},"aria-label":"\u041b\u0430\u0439\u043a",type:"button"}),Object(d.jsx)("span",{className:"card__like-counter",children:e.card.likes.length?e.card.likes.length:""})]})]})]})};function f(e){var t=e.className;return Object(d.jsxs)("div",{className:t,children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})}var m=function(e){var t=e.cards,a=e.isLoadingCards,c=e.isLoadingUserInfo,o=e.onEditAvatar,r=e.onEditProfile,s=e.onAddPlace,i=e.onCardClick,l=e.onCardLike,u=e.onCardDelete,p=Object(n.useContext)(b);return Object(d.jsxs)("main",{className:"main",children:[Object(d.jsxs)("div",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__avatar-container",children:[Object(d.jsx)("img",{src:p.avatar,alt:p.name,className:"profile__photo"}),Object(d.jsx)("button",{onClick:o,className:"profile__edit-avatar"})]}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsxs)("div",{className:"profile__name-wrap",children:[Object(d.jsx)("div",{className:"preloader preloader_type_text preloader_type_text-long ".concat(!c&&"preloader_hidden")}),Object(d.jsx)("h1",{className:"profile__name",children:p.name}),Object(d.jsx)("div",{className:"preloader preloader_type_text preloader_type_text-short ".concat(!c&&"preloader_hidden")}),Object(d.jsx)("button",{onClick:r,className:"button button_type_edit","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",type:"button"})]}),Object(d.jsx)("p",{className:"profile__feature",children:p.about})]}),Object(d.jsx)("button",{onClick:s,className:"button button_type_add","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e",type:"button"})]}),a&&Object(d.jsx)(f,{className:"preloader preloader_type_image lds-ripple"}),Object(d.jsx)("section",{className:"cards-list",children:t.map((function(e){return Object(d.jsx)(j,{card:e,onCardClick:i,onCardLike:l,onCardDelete:u},e._id)}))})]})};var h=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto by Kamenev Nikolay"]})})};var O=function(e){return Object(d.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.card&&"popup_opened"),onClick:function(t){t.target.classList.contains("popup")&&e.onClose()},children:Object(d.jsxs)("div",{className:"popup__image-wrapper",children:[Object(d.jsx)("button",{className:"button button_type_close button_type_close-image","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),Object(d.jsxs)("figure",{className:"popup__figure",children:[Object(d.jsx)("img",{className:"popup__fig-image",src:e.card&&e.card.link,alt:e.card&&e.card.name}),Object(d.jsx)("figcaption",{className:"popup__fig-caption",children:e.card&&e.card.name})]})]})})},_=a(8),x=a(9),v=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))},C=new(function(){function e(t){Object(_.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(x.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(v)}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards/"),{headers:this.headers}).then(v)}},{key:"editProfile",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(v)}},{key:"addCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(v)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(v)}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(v):fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(v)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then(v)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-20",headers:{authorization:"af47fd49-b31e-4449-b574-1e5cb0a80b14","Content-Type":"application/json"}});var g=function(e){return Object(d.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpened&&"popup_opened"),onClick:function(t){t.target.classList.contains("popup")&&e.onClose()},children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{className:"button button_type_close ","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),Object(d.jsx)("h2",{className:"popup__title",children:e.title}),Object(d.jsxs)("form",{name:e.name,action:"#",className:"popup__form",onSubmit:e.onSubmit,noValidate:!0,children:[e.children,Object(d.jsx)("button",{type:"submit",className:"button button_type_submit",children:e.buttonText})]})]})})};var N=function(e){var t=e.isOpen,a=e.onClose,c=e.onUpdateUser,o=e.isLoadingButtonText,r=Object(n.useContext)(b),s=Object(n.useState)(r.name),i=Object(l.a)(s,2),u=i[0],p=i[1],j=Object(n.useState)(r.about),f=Object(l.a)(j,2),m=f[0],h=f[1];return Object(n.useEffect)((function(){p(r.name),h(r.about)}),[r]),Object(d.jsxs)(g,{isOpened:t,onClose:a,onSubmit:function(e){e.preventDefault(),c({name:u,about:m})},name:"person",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:o?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{id:"name",type:"text",value:u,onChange:function(e){p(e.target.value)},minLength:"2",maxLength:"40",name:"name",className:"popup__input popup__input_type_name",placeholder:"\u0418\u043c\u044f",autoComplete:"off",required:!0}),Object(d.jsx)("span",{id:"name-error",className:"popup__error"})]}),Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{id:"feature",type:"text",value:m,onChange:function(e){h(e.target.value)},minLength:"2",maxLength:"200",name:"feature",className:"popup__input popup__input_type_feature",placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",autoComplete:"off",required:!0}),Object(d.jsx)("span",{id:"feature-error",className:"popup__error"})]})]})};var y=function(e){var t=e.isOpen,a=e.onClose,c=e.onUpdateAvatar,o=e.isLoadingButtonText,r=Object(n.useRef)();return Object(d.jsx)(g,{isOpened:t,onClose:a,onSubmit:function(e){e.preventDefault(),c({avatar:r.current.value}),r.current.value=""},name:"update-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:o?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{id:"edit-avatar",type:"url",ref:r,name:"avatar",required:!0,className:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0444\u043e\u0442\u043e",autoComplete:"off"}),Object(d.jsx)("span",{id:"edit-avatar-error",className:"popup__error"})]})})};var k=function(e){var t=e.card,a=e.isOpen,n=e.onClose,c=e.onCardDelete,o=e.isLoadingButtonText;return Object(d.jsx)(g,{isOpened:a,onClose:n,onSubmit:function(e){e.preventDefault(),c(t._id)},name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:o?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430"})};var L=function(e){var t=e.isOpen,a=e.onClose,c=e.onAddPlace,o=e.isLoadingButtonText,r=Object(n.useState)(""),s=Object(l.a)(r,2),i=s[0],u=s[1],p=Object(n.useState)(""),b=Object(l.a)(p,2),j=b[0],f=b[1];return Object(d.jsxs)(g,{isOpened:t,onClose:a,onSubmit:function(e){e.preventDefault(),c({name:i,link:j}),u(""),f("")},name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:o?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{id:"place-name",value:i,onChange:function(e){u(e.target.value)},type:"text",minLength:"2",maxLength:"30",name:"name",className:"popup__input",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(d.jsx)("span",{id:"place-name-error",className:"popup__error"})]}),Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{id:"place-link",value:j,onChange:function(e){f(e.target.value)},type:"url",name:"link",className:"popup__input",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(d.jsx)("span",{id:"place-link-error",className:"popup__error"})]})]})};var S=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),r=Object(l.a)(o,2),u=r[0],j=r[1],f=Object(n.useState)(!1),_=Object(l.a)(f,2),x=_[0],v=_[1],g=Object(n.useState)(!1),S=Object(l.a)(g,2),U=S[0],T=S[1],E=Object(n.useState)(null),P=Object(l.a)(E,2),D=P[0],A=P[1],w=Object(n.useState)({name:"",about:""}),B=Object(l.a)(w,2),I=B[0],q=B[1],J=Object(n.useState)(null),H=Object(l.a)(J,2),M=H[0],z=H[1],F=Object(n.useState)([]),K=Object(l.a)(F,2),R=K[0],V=K[1],Y=Object(n.useState)(!0),G=Object(l.a)(Y,2),Q=G[0],W=G[1],X=Object(n.useState)(!0),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(!1),ae=Object(l.a)(te,2),ne=ae[0],ce=ae[1];function oe(){v(!1),c(!1),j(!1),T(!1),A(null)}return Object(n.useEffect)((function(){C.getInitialCards().then((function(e){V(e)})).catch((function(e){return console.error(e)})).finally((function(){W(!1)}))}),[]),Object(n.useEffect)((function(){function e(e){"Escape"===e.key&&oe()}return(a||u||x||U||D)&&document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[a,u,x,U,D]),Object(n.useEffect)((function(){C.getUserInfo().then((function(e){q(Object(i.a)({},e))})).catch((function(e){return console.error(e)})).finally((function(){ee(!1)}))}),[]),Object(d.jsx)(b.Provider,{value:I,children:Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)("div",{className:"page__container",children:[Object(d.jsx)(p,{}),Object(d.jsx)(m,{onEditAvatar:function(){v(!0)},onEditProfile:function(){c(!0)},onAddPlace:function(){j(!0)},onCardClick:function(e){A(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===I._id}));C.changeLikeCardStatus(e._id,!t).then((function(t){V((function(a){return a.map((function(a){return a._id===e._id?t:a}))}))})).catch((function(e){return console.error(e)}))},onCardDelete:function(e){T(!0),z(e)},cards:R,isLoadingCards:Q,isLoadingUserInfo:$}),Object(d.jsx)(h,{}),Object(d.jsx)(N,{isOpen:a,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:oe,onUpdateUser:function(e){ce(!0),C.editProfile(e).then((function(e){q(Object(i.a)({},e)),oe()})).catch((function(e){return console.error(e)})).finally((function(){ce(!1)}))},isLoadingButtonText:ne}),Object(d.jsx)(L,{isOpen:u,onClose:oe,onAddPlace:function(e){ce(!0),C.addCard(e).then((function(e){V([e].concat(Object(s.a)(R))),oe()})).catch((function(e){return console.error(e)})).finally((function(){ce(!1)}))},isLoadingButtonText:ne}),Object(d.jsx)(O,{card:D,onClose:oe}),Object(d.jsx)(k,{isOpen:U,onClose:oe,onCardDelete:function(e){ce(!0),C.deleteCard(e).then((function(){V(R.filter((function(t){return t._id!==e}))),oe()})).catch((function(e){return console.error(e)})).finally((function(){ce(!1)}))},card:M,isLoadingButtonText:ne}),Object(d.jsx)(y,{isOpen:x,onClose:oe,onUpdateAvatar:function(e){var t=e.avatar;ce(!0),C.updateAvatar(t).then((function(e){q(Object(i.a)({},e)),oe()})).catch((function(e){return console.error(e)})).finally((function(){ce(!1)}))},isLoadingButtonText:ne})]})})})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.fc56f383.chunk.js.map