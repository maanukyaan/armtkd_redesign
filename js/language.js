let am = document.querySelector("#am");
let ru = document.querySelector("#ru");
let us = document.querySelector("#us");

const languages = [am, ru, us];
let currentLanguage = "us";

for (let i = 0; i < languages.length; i++) {
    languages[i].addEventListener("click", (e) => {
        currentLanguage = `${e.target.id}`;
    });
}
