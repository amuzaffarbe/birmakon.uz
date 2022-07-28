let lang = document.querySelector(".select-lang");
let select = document.querySelector(".select");
let arrow = document.querySelector(".arrow"); 

if (localStorage.getItem('language') === null) {
     localStorage.setItem('language', JSON.stringify("uz"));
}

function selectFunction() {
     if (lang.value === "uz") {
          window.location.href = "index.html";
     } else if (lang.value === "ru") {
          window.location.href = "index-ru.html";
     } else if (lang.value === "en") {
          window.location.href = "index-en.html";
     } 
}

