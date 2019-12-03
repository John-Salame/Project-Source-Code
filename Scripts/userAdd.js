function checkValid(letter, capital, number, length, match) {
    var button = document.getElementById('subButton');
    var condition = document.getElementById("title").value=='';
    var condition2 = document.getElementById("description").value=='';
    var condition3 = document.getElementById("user").value=='';
    var condition4 = document.getElementById("password").value=='';
    var textinputs = document.querySelectorAll('input[type=checkbox]');
    var empty = [].filter.call( textinputs, function( el ) {
      return !el.checked
    });
    var condition5= textinputs.length==empty.length;
    if(condition || condition2 || condition3 ||condition4 || condition5) {
            alert("All Required Fields Must Be Filled in to Submit")
          }
    else{
      console.log("Required Fields Full, attempting submit")
      document.getElementById("add-form").submit();
    }
}
