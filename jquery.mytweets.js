/*
 * MyTweets: A jQuery twitter plugin. Shows your latest tweets - v1.2 - 12/11/2013
 * Copyright (c) 2013 Vicente Garcia Dorado (v@vicentegarcia.com)
 * Licensed under GPL (http://opensource.org/licenses/gpl-license.php) licenses.
 */
(function($) {
	/* constructor for Plugin */
	$.fn.mytweets = function(options){
		var opts = $.extend({},$.fn.mytweets.defaultOptions,options);

		return this.each(function (options) {
			var tweets;
			var context = $(this);
			var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
			var strMonth = '';

			$.ajax({
				url: './TwitterSimpleAPI.php',
				dataType: 'json',
				data: {screen_name: opts.screen_name, count: opts.count}
			})
			.done(function(data) {
			  	$.each(data, function(i, item){
          			if (i == 0) {
                        tweets = '<ul>';
                    }
                    for(var i=0; i<=12; i++) {
                		if(months[i] == item['created_at'].substr(4, 3)) {
							strMonth = i + 1;
							if(strMonth < 10) {
								strMonth = '0' + strMonth;
							}
                   		}
                    }
                    var date_str = item['created_at'].substr(8, 2) + '/' + strMonth + '/' + item['created_at'].substr(28,2) + ' - ' + item['created_at'].substr(11,5);
                    tweets += '<li><span class="datetweet">'+ date_str + '</span>: ' + item['text'] +'</li>';
                });
				tweets += '</ul>';
				context.append(tweets);
			});

		});
	};
	/* End the Plugin */

	$.fn.mytweets.defaultOptions = {
	    screen_name : 'twitter',
	    count : '15'
	};

})(jQuery);