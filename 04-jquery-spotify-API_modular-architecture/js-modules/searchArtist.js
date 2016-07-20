(function($) {

	$("form").on('submit', function(event) {

		event.preventDefault();
		var searchValue = $("#search").val();
		var apiSearch = "https://api.spotify.com/v1/search?type=artist&query=" + searchValue;
		$("#secondStep").removeClass('hidden');

		$( document ).trigger( "searchAjax", [ apiSearch, "general-search" ]);

	});

})(jQuery)