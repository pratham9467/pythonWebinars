document.getElementById("myForm").addEventListener("submit", function (event) {
  let valid = true;

  const username = document.getElementById("name");
  const email = document.getElementById("email");
  const contact = document.getElementById("contact");

  if (username.value.length < 0) {
    valid = false;
    document.getElementById("usernameError").textContent =
      "Username must be at least 3 characters long.";
  } else {
    document.getElementById("usernameError").textContent = "";
  }

  if (!email.validity.valid) {
    valid = false;
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
  } else {
    document.getElementById("emailError").textContent = "";
  }
  if (contact.value.length < 0) {
    valid = false;
    document.getElementById("contacterror").textContent =
      "Please enter a valid contact number.";
  } else {
    document.getElementById("contacterror").textContent = "";
  }

  if (!valid) {
    event.preventDefault();
  }
});
