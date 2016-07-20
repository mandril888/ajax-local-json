(function($) {

	$( document ).on( "ajaxSearched", function( event, result, type ) {

		if ( type === "general-search") {

			var artists = result.artists.items;
			var optionsArtists = "<option> Selecciona un artista</option>";
			$.each ( artists, function ( index, oArtist) {
				optionsArtists += '<option value="' + oArtist.id + '">' + oArtist.name + ' </option>'
			})
			
			$("#artists").html(optionsArtists);

		}

	});

})(jQuery)