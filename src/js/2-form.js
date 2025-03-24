const accumulatedData = {};

const submitForm = document.querySelector(".submit-form");

submitForm.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const email = submitForm.elements.email.value.trim();
  const message = submitForm.elements.password.value.trim();

  if (!email || !message) {
    alert("All form fields must be filled in");
    return;
  }

  accumulatedData[email] = message;

  console.log("Accumulated data:", accumulatedData);

  submitForm.reset(); 
});