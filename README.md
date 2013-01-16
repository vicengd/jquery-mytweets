## Description

MyTweets: A jQuery twitter plugin. Shows your latest tweets.

## Getting Started

1. Include the JS file into your page after jQuery:
```
<script src="http://code.jquery.com/jquery.min.js"></script>
<script src="jquery.mytweets.js"></script>
```

2. Call the mytweets function to any div element:
```
	<script>
		$(function()
		{
			$('#divTweets').mytweets({username: 'yourusername', count: 3});
		});
	</script>
```

3. Create you empty container and give it a id:
```
	<div id="divTweets"></div>
```
## License
Copyright (c) 2013 Vicente García Dorado Licensed under the GPL license.