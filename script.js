document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const errorMessage = document.querySelector(".error-message");
  const submitButton = document.querySelector(".submit-button");

  submitButton.addEventListener("click", () => {
    const emailValue = emailInput.value.trim();
    if (!emailValue) {
      errorMessage.textContent =
        "Whoops! It looks like you forgot to add your email";
    } else if (!isValidEmail(emailValue)) {
      errorMessage.textContent = "Please provide a valid email address";
    } else {
      errorMessage.textContent = "";
    }
    errorMessage.style.display = errorMessage.textContent ? "block" : "none";
    emailInput.style.border = errorMessage.textContent
      ? "1px solid #ff5263"
      : "1px solid	#c2d3ff";
  });

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
});
