var btnMap = document.querySelector(".btn_map");
var feedback = document.querySelector(".modal__feedback");
var feedbackWin = document.querySelector(".feedback");
var close = document.querySelector(".feedback__close");
var inputLogin = document.querySelector(".feedback__input[type=text]");
var inputEmail = document.querySelector(".feedback__input[type=email]");
var inputTextarea = document.querySelector(".feedback__textarea");
var feedbackForm = document.querySelector(".feedback__form");

var isStorageSupport = false;
var storage = "";

try{
  var storage = localStorage.getItem("inputLogin");
} catch(err) {
  isStorageSupport = false;
}

btnMap.addEventListener("click", function(evt){
  evt.preventDefault();
  feedback.classList.add("modal__feedback_show");
  if (storage) {
    inputLogin.value = storage;
    inputEmail.focus();
  } else {
    inputLogin.focus();
  }
});

feedbackForm.addEventListener("submit", function(evt){
  if (!inputLogin.value || !inputEmail.value || !inputTextarea.value){
    evt.preventDefault();
    feedbackWin.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("inputLogin", inputLogin.value);
    }
  }
});

close.addEventListener("click", function(evt){
  evt.preventDefault();
  feedback.classList.remove("modal__feedback_show");
  feedbackWin.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27){
    if(feedback.classList.contains("modal__feedback_show")){
      evt.preventDefault();
      feedback.classList.remove("modal__feedback_show");
    }
  }  
})