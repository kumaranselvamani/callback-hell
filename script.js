// Call the countdown function with nested callbacks
(function countdown(number, callback) {
    if (number > 0) {
      document.getElementById('countdown').innerText = number;
      setTimeout(function() {
        countdown(number - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  })(10, function() {
    document.getElementById('countdown').innerText = "Happy Independence Day!";
  });