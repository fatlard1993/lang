const lang = {
	languages: {},
	default: 'en-US',
	templateRegex: /\$?{(\w+|\[.+\])}/,
	load: function (language) {
		lang.languages[language.name] =
			typeof lang.languages[language.name] === 'undefined'
				? language.translation
				: Object.assign(lang.languages[language.name], language.translation);
	},
	parse: function (template) {
		template.match(new RegExp(lang.templateRegex, 'gm')).forEach(variable => {
			template = template.replace(variable, lang.get(lang.templateRegex.exec(variable)[1]));
		});

		return template;
	},
	get: function (key) {
		if (key instanceof Array || key[0] === '[') {
			if (typeof key === 'string') {
				try {
					key = JSON.parse(key);
				} catch (err) {
					return '';
				}
			}

			const getKey = res => {
				key.forEach(subKey => {
					res = res && res[subKey] ? res[subKey] : undefined;
				});
				return res;
			};

			let res = getKey(lang.languages[lang.name]);

			if (res) return res;

			res = getKey(lang.languages[navigator.language]);

			if (res) return res;

			res = getKey(lang.languages[lang.default]);

			if (res) return res;
		} else if (typeof key === 'string') {
			if (lang.languages[lang.name]?.[key]) return lang.languages[lang.name][key];

			if (lang.languages[navigator.language]?.[key]) return lang.languages[navigator.language][key];

			if (lang.languages[lang.default]?.[key]) return lang.languages[lang.default][key];
		}

		return '';
	},
};

export default lang;
