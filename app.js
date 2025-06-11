function loginCheck() {
  let username = document.getElementById("un").children[0].value;
  let password = document.getElementById("pw").children[0].value;

  if (username === "" || password === "") {
    alert("Enter the both fields");
    return false;
  }

  if (username === "Bala" && password === "8888") {
    // alert("Login successful!");
    return true;
  } else {
    alert("Invalid username or password.");
    return false;
  }
}

document.getElementById("ln").children[0].onclick = function (e) {
  if (!loginCheck()) {
    e.preventDefault(); // Block going to index2.html
  }
};
