// JS

$( document ).ready(function() {

		var i = 1;
		
		function scrambleText(htmlElement, atIndex, original, numberOfLoops, delay) {

			// Flip the letters for the CryptoParty title
			function randomLetters() {
				var text = "";
				var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
				for ( var i=0; i < original.length; i++ ) {
					text += possible.charAt(Math.floor(Math.random() * possible.length));
				}
				return text;
			};

			setTimeout(function () {

				$(htmlElement)[atIndex].innerHTML = randomLetters();
				i++;
				// Number of times to loop
				if (i < numberOfLoops) {
					scrambleText(htmlElement, atIndex, original, numberOfLoops, delay);
				} else {
					$(htmlElement)[atIndex].innerHTML = original;
				}
			}, delay) // Delay between loops

		};

		// Helper function to save the original element
		function scramble(htmlElement, numberOfLoops, delay) {
			var allElements = $(htmlElement);
			for (var i = 0; i < allElements.length; i++) {
				if (i > 0) {
					numberOfLoops += 80;
				};
				scrambleText(htmlElement, i, allElements[i].innerHTML, numberOfLoops, delay);
			};
		}

		// Text to scramble
		scramble('h1', 170, 50);
		scramble('h2', 250, 50);
		scramble('h3', 330, 50);
});