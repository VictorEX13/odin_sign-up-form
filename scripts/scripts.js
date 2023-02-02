const pwd = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#confirm-pwd");

function setPwdValidity() {
  if (pwd.value !== confirmPwd.value) {
    pwd.setCustomValidity("Password do not match!");
    confirmPwd.setCustomValidity("Password do not match!");
  } else {
    pwd.setCustomValidity("");
    confirmPwd.setCustomValidity("");
  }
}

pwd.addEventListener("change", setPwdValidity);
confirmPwd.addEventListener("change", setPwdValidity);
