document.getElementById("btn").addEventListener("click", function () {
  const nameInput = document.getElementById("nameInput");
  const output = document.getElementById("output");
  if (nameInput.value.trim() === "") {
    output.style.color = "red";
    output.innerText = "Please enter your name 🙂";
  } else {
    output.style.color = "green";
    output.innerText =
      "Hello " + nameInput.value + "! Welcome to Day 3 🎉";
    nameInput.value = "";
  }
});
