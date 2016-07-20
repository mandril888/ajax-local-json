(function($) {
			
	$( document ).on( "ajaxSearched", function( event, result, type ) {
		
		if ( type === 'songs' ) {

			var songs = result.items;
			var optionsSongs = "";
			$.each ( songs, function ( index, oSongs) {
				optionsSongs += '<li><a href="' + oSongs.preview_url + '" target="_blank">' + oSongs.name + '</a></li>'
			})
			
			$("#lista").html(optionsSongs);

		}
	})

})(jQuery)