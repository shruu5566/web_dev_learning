function showName() {
  let name = document.getElementById("nameInput").value;

  if (name === "") {
    document.getElementById("output").innerText =
      "Please enter your name 🙂";
  } else {
    document.getElementById("output").innerText =
      "Hello " + name + "! Welcome to Day 3 🎉";
  }
}

