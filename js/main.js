var btnMap = document.querySelector(".btn_map");
var feedback = document.querySelector(".modal__feedback");
var close = document.querySelector(".feedback__close");
var inputLogin = document.querySelector(".feedback__input[type=text]");
var inputEmail = document.querySelector(".feedback__input[type=email]");
var inputTextarea = document.querySelector(".feedback__textarea");
var feedbackForm = document.querySelector(".feedback__form");

btnMap.addEventListener("click", function(evt){
  evt.preventDefault();
  feedback.classList.add("modal__feedback_show");
  inputLogin.focus();
});

feedbackForm.addEventListener("submit", function(evt){
  if (!inputLogin.value || !inputEmail.value || !inputTextarea.value){
    evt.preventDefault();
    console.log("нужно ввести имя и почту с комментарием");
  } else{
    localStorage.setItem("inputLogin", inputLogin.value);
    console.log("Отправил");
  }
});

close.addEventListener("click", function(evt){
  evt.preventDefault();
  feedback.classList.remove("modal__feedback_show");
});