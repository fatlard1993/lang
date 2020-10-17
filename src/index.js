import Log from 'log';

const lang = {
	logger: new Log({ tag: 'lang' }),
	languages: {},
	default: 'en-US',
	load: function(language){
		lang.languages[language.name] = typeof lang.languages[language.name] === 'undefined' ? language.translation : Object.assign(lang.languages[language.name], language.translation);
	},
	parse: function(template){
		template.match(/\${(\w+)}/gm).forEach((variable) => {
			template = template.replace(variable, lang.get(/\${(\w+)}/.exec(variable)[1]));
		});

		return template;
	},
	get: function(prop){
		if(lang.languages[navigator.language] && lang.languages[navigator.language][prop]) return lang.languages[navigator.language][prop];

		if(lang.languages[lang.default] && lang.languages[lang.default][prop]) return lang.languages[lang.default][prop];

		lang.log.warn()(`No matching lang prop for "${prop}"`);

		return '';
	}
};

if(typeof module === 'object') module.exports = lang;