# lang

Simple language mapping

```
lang.load({
	name: 'en-US',
	translation: {
		title: 'My Cool App',
		author: 'Mr. cool guy',
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		errors: {
			load: 'Error loading the thing',
			do: 'Error doing the thing'
		}
	}
});
```


```
lang.parse('${title} | ${author}');
```

```
lang.parse('${title} .. Error: ${["errors", "do"]}');
```


```
lang.get('days')[new Date().getDay()];
```

```
lang.get(['errors', 'load']);
```