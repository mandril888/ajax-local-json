(function($) {

	$("#artists").on('change', function(event) {

		var artistValue = $("#artists").val();
		var apiArtists = "https://api.spotify.com/v1/artists/" + artistValue + "/albums";
		$("#thirdStep").removeClass('hidden');

		$( document ).trigger( "searchAjax", [ apiArtists, "albums" ]);
		
	});

})(jQuery)