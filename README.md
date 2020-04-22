# Find Focused Element

This library provides an easy way to get a focused HTML element. 

Demo: https://stackblitz.com/edit/angular-uj2nvt

## Quick Start

Add it to your project

```bash
npm install --save find-focused-element
```

Import using ES Modules:

```js
import findFocusedElem from 'find-focused-element';
```

Or as a CommonJS:

```js
const findFocusedElem = require('find-focused-element');
```

Use:

```js
const elem = findFocusedElem(window.document);
```

## Browser Support
The library has been tested in:
* Latest Edge, Firefox, Chrome, Opera, Safari (Mac)
* iOS 11 Safari
* IE 8-11