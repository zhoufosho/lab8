'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	var startTime = new Date().getTime();
	$('.likeBtn').click(likeCallback);

	function likeCallback(e){

		var endTime = new Date().getTime();
		var timeSpent = endTime - startTime;

		ga("send", "event", "like", "click");
		ga('send', 'timing', 'TimeTillLike', timeSpent);
	}
}

