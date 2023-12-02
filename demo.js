import lang from './src/index.js';

const log = console.log;

const test = (func, ...args) => {
	log({ func, args, result: lang[func](...args) });
};

lang.load({
	name: 'en-US',
	translation: {
		title: 'My Cool App',
		author: 'Mr. cool guy',
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		errors: {
			load: 'Error loading the thing',
			do: 'Error doing the thing',
		},
	},
});

lang.load({
	name: 'gibberish',
	translation: {
		title: 'coblaybppa',
		author: 'megocogu',
		days: ['unsay', 'moknd', 'dasytoo', 'weydn', 'sdfary', 'fryday', 'blarf'],
		errors: {
			load: 'Error with your mom',
			do: 'Error trying to win',
		},
	},
});

test('parse', `{title} | {["days", "${new Date().getDay()}"]}`);

test('parse', '${title} .. Error: ${["errors", "do"]}');

test('get', ['errors', 'load']);
