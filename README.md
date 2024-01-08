# wordiesJS NPM Package

## Description
The wordiesJS NPM package is a collection of utility functions that perform various operations on strings. Whether you need to manipulate text, work with abbreviations, generate random words, or enjoy a dad joke, this package has got you covered.

## Installation
To install the wordiesJS package, use the following command:

```bash
npm install wordiesJS
```

## Usage

```javascript
const {
    repeat, trim, toUpperCase, toLowerCase, reverse, replace,
    what3word,
    expandAbbrev, toInitial,
    camelCase, capitalize, kebabCase, snakeCase, startCase,    
    randomWord, randomWords,
    dadJoke  
} = require('wordiesjs');
```

## String Manipulation

### repeat(str, n)
Repeats the given string `n` times.

### trim(str)
Trims leading and trailing whitespaces from the given string.

### toUpperCase(str)
Converts the given string to uppercase.

### toLowerCase(str)
Converts the given string to lowercase.

### reverse(str)
Reverses the characters in the given string.

### replace(str, search, replacement)
Replaces occurrences of `search` with `replacement` in the given string.

## What3Words Integration

### what3word
Provides access to the What3Words API for converting 3-word addresses to coordinates and vice versa.

## Abbreviation Handling

### expandAbbrev(abbrev)
Expands the given abbreviation to its full form.

### toInitial(phrase)
Returns the initials of each word in the given phrase.

## Case Formatting

### camelCase(str)
Converts the given string to camelCase.

### capitalize(str)
Capitalizes the first letter of the given string.

### kebabCase(str)
Converts the given string to kebab-case.

### snakeCase(str)
Converts the given string to snake_case.

### startCase(str)
Converts the given string to Start Case.

## Random Word Generation

### randomWord()
Generates a random word.

### randomWords(n)
Generates an array of `n` random words.

## Dad Joke

### dadJoke()
Retrieves a random dad joke for your amusement.

## Author
* Trung Dang

## Contributing
Feel free to contribute by submitting issues or pull requests on the [GitHub repository](https://github.com/dmtrung14/wordiesjs).

## License
This package is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.