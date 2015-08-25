(function () {
	'use strict';

	//simple simple simple plugin to change view of the create form from normal to extended
	$.fn.createForm = function () {
		var $btn = $(this),
			$container = $btn.parent(),
			$form = $container.find('form.create-form');

		$btn.on('click', function (e) {
			e.preventDefault();

			if ($container.hasClass('extended')) {
				alert('submit should happen');
			}

			$container.addClass('extended');
		});
	}
}());