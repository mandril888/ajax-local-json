(function($) {

	$("#albums").on('change', function(event) {

		var albumValue = $("#albums").val();
		var apiAlbum = "https://api.spotify.com/v1/albums/" + albumValue + "/tracks";
		$("#fourthStep").removeClass('hidden');

		$( document ).trigger( "searchAjax", [ apiAlbum, "songs" ]);
			
	});

})(jQuery)