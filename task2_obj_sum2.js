// Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.

// Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.

//Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.

let nestedObject = {
  speakers: [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: 'Bern',
            population: 8000000,
          },
        },
      },
    },
    languages: {
      spanish: {
        hello: 'Hola',
      },
      french: {
        hello: 'Bonjour',
      },
    },
  },
};

//1.
Object.defineProperty(nestedObject, 'addSpeaker', {
  value: function (speaker) {
    this.speakers.push(speaker);
    return this;
  },
});
console.log(nestedObject.addSpeaker({ name: 'kunj' }));
//2.
Object.defineProperty(nestedObject, 'addLanguage', {
  value: function (language) {
    this.data.languages[Object.keys(language)[0]] = Object.values(language)[0];
    return this;
  },
});
console.log(
  nestedObject.addLanguage({
    gujarati: {
      Hello: 'kemchho',
    },
  })
);
//3.
nestedObject['addCountry'] = function (country) {
  this.data.continents.europe.countries[Object.keys(country)[0]] =
    Object.values(country)[0];
  return this.data.continents.europe;
};
console.log(
  nestedObject.addCountry({
    France: { capital: 'Paris', population: 65000000 },
  })
);
