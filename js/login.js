const elEmailInp = document.querySelector(".js-email-input");
const elPasswordInp = document.querySelector(".js-password-input");
const elErrorAlert = document.querySelector(".js-error-alert");
const elBtnOk = document.querySelector(".js-btn-ok");
const handleInputChangeAndBlur = evt => {
    try {
        const evt_target_id = evt.target.id;
        const evt_target_value = evt.target.value;
        if (evt_target_id == "email") {
            if (!(evt_target_value.length)) throw (new Error("Email is required"));
            if (!(email_regex.test(evt_target_value))) throw (new Error("Invalid email addres"));
            if(evt_target_value.length || email_regex.test(evt_target_value)) elErrorAlert.classList.add("d-none");
        };
        if (evt_target_id == "password" && !(evt_target_value.length)) throw (new Error("Password is required"));
        if (evt_target_id == "password" && (evt_target_value.length)) elErrorAlert.classList.add("d-none");
    } catch (error) {
        elErrorAlert.classList.remove("d-none");
        elErrorAlert.querySelector(".js-error-title").textContent = error.message;
    }
}
elBtnOk.addEventListener("click", () => elErrorAlert.classList.add("d-none"));

elEmailInp.addEventListener("change", handleInputChangeAndBlur);
elEmailInp.addEventListener("blur", handleInputChangeAndBlur);

elPasswordInp.addEventListener("change", handleInputChangeAndBlur);
elPasswordInp.addEventListener("blur", handleInputChangeAndBlur);


