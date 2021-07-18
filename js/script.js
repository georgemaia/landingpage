const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let news = document.querySelector("#subscribe").checked;

    if (name == "" || email == "") alert("Antes de se inscrever é necessário informar seu nome e e-mail.")
    else {
        localStorage.setItem("crescer_com_educacao", JSON.stringify({ "name": name, "email": email, "subscribe": news }));

        setTimeout(() => {
            let formContainer = document.querySelector(".form-container");
            formContainer.innerHTML = "<p><strong>E-mail de confirmação enviado!</strong><br />Agora é só confirmar nosso e-mail em sua caixa de entrada.</p>";
        }, 1500);
    }

});