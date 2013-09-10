//Google now requires an API Key to use Google Translate on your website and charges $20 USD per million characters. Question: Where do you add the key within the above URL in order not to get a 404 message from Google. 

function doClick(e) {
	alert('Data');

	textToSpeech();
}

$.index.open();

function textToSpeech() {
	var xhr = Ti.Network.createHTTPClient({
		onload : function() {
			Ti.API.info('this.responseText------>' + this.responseText);
			var player = Ti.Media.createSound({
				url : url
			});
			player.play();
		},
		onerror : function(e) {
			Ti.API.info('this.responseText------++>' + e);
		},
	});
	var url = "http://translate.google.com/translate_tts?ie=UTF-8&q=" + $.textField.value + '&tl=en-us';
	xhr.open('GET', url);
	xhr.send();
}
