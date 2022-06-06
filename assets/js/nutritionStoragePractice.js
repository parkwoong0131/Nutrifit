

const form = document.querySelector(".inputForm"),
  input = form.querySelector(".inputText"),
  button = document.querySelector(".submit");


 function saveText (){
     localStorage.setItem('lunch',input.value )
}

button.addEventListener("submit", saveText());


