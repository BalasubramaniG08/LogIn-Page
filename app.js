function login()
 {
  let user = document.getElementById("un").value;
  let pass = document.getElementById("pw").value;

  if(user === "Bala" && pass === "8888"){
    document.getElementById("bn");
    window.location.href="./index1.html";
  }
  else if (user === "" || pass === "") {
    alert("Enter the both field");
  } else {
    alert("Invalid password or username");
  }

 }