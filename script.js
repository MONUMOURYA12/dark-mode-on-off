let button=document.getElementsByClassName("btn");

for (let i = 0; i < button.length; i++) {

      button[i].addEventListener("click", ()=> {
        document.body.classList.toggle("dark-mode");

      });
    }