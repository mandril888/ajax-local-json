(function($) {
	
	$( document ).on( "ajaxSearched", function( event, result, type ) {

		if ( type === "albums") {

			var albums = result.items;
			var optionsAlbums = "<option> Selecciona un album</option>";
			$.each ( albums, function ( index, oAlbums) {
				optionsAlbums += '<option value="' + oAlbums.id + '">' + oAlbums.name + ' </option>'
			})
			
			$("#albums").html(optionsAlbums);

		}

	})

})(jQuery)