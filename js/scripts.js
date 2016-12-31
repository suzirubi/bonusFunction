$(document).ready(function(){

  $("span").click(function(){

    var answerPrompt = prompt("Please enter a sentence to be encyrpted below...");

    console.log(answerPrompt);

    function replacer(match, p1, p2, p3) {
      var firstLast = [p1, "", p3].join("");
      return firstLast.toUpperCase();
    }

		function reverseAnswer(string){
      var firstLastUpper = answerPrompt.replace(/(^.|^.\S)(.*)(.$|.\.$)/, replacer);
    	var switchFirstLastUpper = firstLastUpper.replace(/(^.|^.\S)(.$|.\.$)/, '$2$1');
    	var divideAnswer = (answerPrompt.length / 2);
    	var replace = answerPrompt.charAt(divideAnswer);
    	var concate = (replace + answerPrompt + switchFirstLastUpper);
      var split = concate.split("");
      var reverse = split.reverse();
      var join = reverse.join("");
      return join;
    }

    var encryptedAnswer = reverseAnswer();

    console.log(encryptedAnswer);

  });

});
