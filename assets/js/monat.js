// Start aktuelle Jahreszahl
var aktuellerMonat = (new Date).getMonth() + 1;
$(document).ready(function () {
	$('#monat').text(aktuellerMonat);
});
// Ende aktuelle Jahreszahl