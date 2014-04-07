# slugification

[![Build Status](https://travis-ci.org/samora/slugification.svg)](https://travis-ci.org/samora/slugification)

Transform string into slug. Replaces spaces and special characters.

## Installation

```
npm install slugification
```

## Usage

```javascript
var slugify = require('slugification');

slugify('What is this?')
// => 'What-is-this'
```

## API

### slugification(str, spaceReplacement, specialCharReplacement)

* __str__: String to be transformed.
* __spaceReplacement__: String or character to replace spaces with. Defaults to `'-'`.
* __specialCharReplacement__: String or character to replace special characters with.
  Defaults to `''`.

## Tests

```
npm install -g mocha
```

Then
```
npm test
```

## License
MIT