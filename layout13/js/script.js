jQuery(function( $ ) {

				//	Add a custom filter to recognize images from lorempixel (that don't end with ".jpg" or something similar)
				$.tosrus.defaults.media.image = {
					filterAnchors: function( $anchor ) {
						return $anchor.attr( 'href' ).indexOf( 'image' ) > -1;
					}
				};

				$('#example-1 a').tosrus({
					buttons: 'inline',
					pagination	: {
						add			: true,
						type		: 'thumbnails'
					}
				});

				$('#example-2 a').tosrus({
					pagination	: {
						add			: true
					},
					caption		: {
						add			: true
					},
					slides		: {
						scale		: 'fill'
					}
				});

				$('#example-3 a').tosrus();

				$('#example-4').tosrus({
					infinite	: true,
					slides		: {
						visible		: 3
					}
				});

				$('#example-5').tosrus({
					buttons		: false,
					pagination	: {
						add			: true
					},
					slides		: {
						scale		: 'fill'
					}
				});

			});