# lang

Simple language mapping

```
lang.load({
	name: 'en-US',
	translation: {
		title: 'My Cool App',
		author: 'Mr. cool guy',
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	}
});
```


```
lang.parse('${title} | ${author}');
```


```
lang.get('days')[new Date().getDay()];
```