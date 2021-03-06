

;(function ($) {

	var lazyFade = {

	
		settings: {
			reverse: false,
			duration: 500,
			delay: 50,
			opacity: {
				start: 0.01,
				end: 1
			}
		},


		init: function (options) {
			var	settings	= $.extend(lazyFade.settings, options),
				index_n		= (settings.reverse === true) ? this.length : 0;

			return this.each(function () {
				var $this	= $(this);

				lazyFade.fade($this, settings, index_n);
				(settings.reverse === true) ? --index_n : ++index_n;
			});
		},


		fade: function ($object, settings, index_n) {
			$object.fadeTo(0, settings.opacity.start);
			$object.delay(settings.delay * index_n).fadeTo(settings.duration, settings.opacity.end);
		}

	};

	$.fn.lazyFade = function (method) {
		if (lazyFade[method]) {
			return lazyFade[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || !method) {
			return lazyFade.init.apply(this, arguments);
		}
		else {
			return $.error('Method ' + method + ' does not exist on jQuery.lazyFade');
		}
	};

})(jQuery);