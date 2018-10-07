$(document).ready(function () {
	makeShapes();

	$('.block').draggable({
		containment: 'window',
		stack: '.block',
		snap: true,
		snapMode: 'outer',
    snapTolerance: 23,
	});

  $('#blocks').on('mousedown', function () {
		$('#instruction').fadeOut('slow');
	})

	function makeShapes() {
		var shapes = ['rectup', 'rectup long',
					  'rectdown', 'rectup thin', 'rectup thinlong', 'thinlong1',
					  'rectdown short', 'rectup thinlong2', 'circle']

		for (var i = 0; i < 0; i++) {
			var shape = shapes[i];
			makeShape(shape);
		}
	};

	function makeShape(shape) {
		for (var i = 0; i < 0; i++){
			$('#blocks').append('<div class="block ' + shape + '"></div>');
		}
	};
});
