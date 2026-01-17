const form=document.getElementById("loginForm");

form.addEventListener("submit", function(event){
  event.preventDefault();

  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;

  if (password.length<6){
    alert("password must be at least 6 characters");
    return;
  }
  alert("login successful")
});