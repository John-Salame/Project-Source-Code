function checkValid2(letter, capital, number, length, match) {
    var condition1= document.getElementById("email").value=='';
    var condition2 = document.getElementById("password").value=='';
    var condition3 = document.getElementById("confirmPassword").value=='';
    var condition4 = document.getElementById("password").value == document.getElementById("confirmPassword").value;
    if(condition1 || condition2 || condition3) {
            alert("All Required Fields Must Be Filled in to Submit")
          }
    else if(!(condition4)){
      alert("Passwords must match")
    }
    else{
      console.log("Required Fields Full, attempting submit")
      document.getElementById("register-form").submit();
    }
}
