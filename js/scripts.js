$(document).ready(function(){
  $("#formOne").submit(function(event) {
    var inputTo = parseInt($("#countTo").val());
    var inputBy = parseInt($("#countBy").val());
    var getOutput = [];

    if (isNaN(inputTo) && isNaN(inputBy) && inputTo < 0 && inputBy < 0) {
      alert("Please enter valid positive numbers");
    }
    else if (inputBy > inputTo) {
      alert("CountTo must be greater than countUp");
    }
    else {

      for ( var i=1; i * inputBy < inputTo; i +=1) {
        var currentNumber = i * inputBy;
        getOutput.push(currentNumber);
      }
      var result = getOutput.join(', ');
      $("#result").text(result);
    }

    event.preventDefault();

  });
});
