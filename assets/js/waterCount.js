// const active = document.querySelector(".active");

// const CLICKED_CLASS = "clicked";

// function handleClick(){
//     const hasClass = active.classList.contains(CLICKED_CLASS);

//     if (hasClass){
//         active.classList.remove(CLICKED_CLASS);
//     } else {
//         active.classList.add(CLICKED_CLASS);
//     }
// }

// active.addEventListener("click", handleClick);

// function init(){
//     handleClick();
// }

function count(type)  {
    const resultElement = document.getElementById('result');
    
    let number = resultElement.innerText;
    
    if(type === 'plus') {
      number = parseInt(number) + 1;
    }
    resultElement.innerText = number;
  }
