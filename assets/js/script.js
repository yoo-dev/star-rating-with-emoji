(function() {
	const starRatingSystem = document.querySelector('.star-rating-system');
	const stars = document.querySelectorAll('.star-rating .star');

	stars.forEach(function(star, key) {
		star.addEventListener('click', function() {
			starRatingSystem.setAttribute('data-score', key + 1);
		});
	});
})();