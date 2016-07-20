(function($) {

	$( document ).on( "searchAjax", function( event, urlApi, type ) {	

		$.ajax({
			url: urlApi
		})

		.done(function( searchResultsData ) {
			var result = searchResultsData;
			$( document ).trigger( "ajaxSearched", [result, type ]);
		})

	});

})(jQuery)