# string-methods-extension
This package extends the String Methods, to add some features to ECMAScript 6. 
It works nicely bothe for Node and the browser.

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install string-methods-extension
```

In a browser:

```html
<script src="string-methods-extension.js"></script>
```

In [Node.js](https://nodejs.org/):

```js
const he = require('string-methods-extension');
```

Using yarn

`yarn add string-methods-extension`

## Table of Contents
* [trim](#trim)
* [trimStart](#trimStart)
* [trimEnd](#trimEnd)
* [reverse](#reverse)
* [stripTags](#stripTags)
* [stripWhiteSpace](#stripWhiteSpace)
* [replaceAll](#replaceAll)
* [encodeXML](#encodeXML)
* [decodeXML](#decodeXML)

## Usage

### trim

The `trim()` method removes whitespace of a specified character from both sides of a string.

```javascript
`     ahsdfjhfhf    `.trim();                                               // `ahsdfjhfhf`
`......ahsdfjhfhf.....`.trim('.');                                          // `ahsdfjhfhf`
```

### trimStart

The `trimStart()` method removes whitespace of a specified character at the left side of a string.

```javascript
`     ahsdfjhfhf    `.trimStart();                                          // `ahsdfjhfhf    `
`......ahsdfjhfhf.....`.trimStart('.');                                     // `ahsdfjhfhf.....`
```

### trimEnd

The `trimEnd()` method removes whitespace of a specified character at the right side of a string.

```javascript
`     ahsdfjhfhf    `.trimEnd();                                            // `     ahsdfjhfhf`
`......ahsdfjhfhf.....`.trimEnd('.');                                       // `......ahsdfjhfhf`
```

### reverse

The `reverse()` method reverse the characters of a string.

```javascript
`abcdef`.reverse();                                                         // `fedcba`
`Hello World`.reverse();                                                    // `dlroW olleH`
```

### stripTags

The `stripTags()` method removes html or xml tags from a string.

```javascript
`Hello <b>world!</b>`.stripTags();                                          // `Hello world!`
`Hello <b><a href="hello.html">world!</a></b>`.stripTags();                 // `Hello world!`
```

### stripWhiteSpace

The `stripWhiteSpace()` method removes white spaces from a string, with a single space or specified character.

```javascript
`test     test    test`.stripWhiteSpace();                                  // `test test test`
`test     test    test`.stripWhiteSpace('.');                               // `test.test.test`
```

### replaceAll

The `replaceAll()` method returns a string where a specified string is replaced with another specified string.

```javascript
`123 test nl.`.replaceAll({'123': 'abc','nl': 'Netherlands',});             // `abc test Netherlands.`
`You should eat fruits, vegetables, and fiber every day`.replaceAll({'fruits': 'pizza','vegetables': 'beer', 'fiber': 'ice cream',});
                                                                            // `You should eat pizza, beer, and ice cream every day`
```

### encodeXML

The `encodeXML()` method adds XML encoding to a string.

```javascript
`test&"test" 1<2`.encodeXML();                                              // `test&amp;&quot;testquot; 1&lt;2`
```

### decodeXML

The `decodeXML()` method removes XML encoding form a string.

```javascript
`test&amp;&quot;testquot; 1&lt;2`.decodeXML();                              // `test&"test" 1<2`
```


## Unit tests & code coverage

After cloning this repository, run `npm install--dev` to install the dependencies needed for he development and testing.
Once that is done, you can run the unit tests in Node using `npm test`