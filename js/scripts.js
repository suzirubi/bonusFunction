$(document).ready(function(){

  $("span").click(function(){


    var answerPrompt = prompt("Please enter a sentence to be encyrpted below...");

    console.log(answerPrompt);

    function replacer(match, p1, p2, p3) {
      var firstLast = [p1, "", p3].join("");
      return firstLast.toUpperCase();
    }

    var newString = answerPrompt.replace(/(^.|^.\S)(.*)(.$|.\.$)/, replacer);

    console.log(newString);

    var switchString = newString.replace(/(^.|^.\S)(.$|.\.$)/, '$2$1');

    console.log(switchString);


  });

});
