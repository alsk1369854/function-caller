# function-caller 
[![npm version](https://img.shields.io/npm/v/function-caller)](https://www.npmjs.com/package/function-caller) [![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=function-caller&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=function-caller) ![check-code-coverage](https://img.shields.io/badge/code--coverage-97.05%25-brightgreen) ![npm type definitions](https://img.shields.io/npm/types/function-caller) ![NPM](https://img.shields.io/npm/l/function-caller)








function-caller is a cross-component function call library written in Typescript

## Getting function-caller
npm
```shell
npm install function-caller --save
```
html script tag
```html
<script src="https://unpkg.com/function-caller/dist/index.min.js"></script>
```

## Example
### First you have to import the module:
```javascript
import FunctionCaller from 'function-caller';

// or when using CommonJS
const FunctionCaller = require('function-caller');
```

### Basic example
```javascript
// create a function
const myFunc = function (a, b) {
    return a + b;
}

// register a function with the function-caller
const myKey = 'myKey';
FunctionCaller.set(myKey, myFunc);

// call a function using the function-caller
const callReturn = FunctionCaller.call(myKey, 2, 3);
console.log(callReturn); // 5

// call a function asynchronously using the function-caller
FunctionCaller.asyncCall(myKey, 4, 6).then((value) => {
    console.log(value); // 10
}); 
```

### Unregister function
```javascript
// create a function
const myFunc = function (a, b) {
    return a + b;
}

// register a function with the function-caller
const myKey = 'myKey';
FunctionCaller.set(myKey, myFunc);

// unregister in function-caller
FunctionCaller.remove(myKey);
```

### Clear all registration
```javascript
FunctionCaller.set('key1', ()=>{});
FunctionCaller.set('key2', ()=>{});
FunctionCaller.set('key3', ()=>{});

FunctionCaller.clear();
// all registration are removed
```

## Working with React
### Register function in component A
```jsx
import React, { useState, useEffect } from 'react'
// import function-caller library
import FunctionCaller from 'function-caller'

// export registration key
export const SET_TEXT = "set text";

export default function A() {
  // create a function
  const [text, setText] = useState('Hi');

  useEffect(() => {
    // register function when the component did mount
    FunctionCaller.set(SET_TEXT, setText);
    return () => {
      // unregister function when component will unmount
      FunctionCaller.remove(SET_TEXT);
    }
  }, [])

  return (
    <div>
      A Component
      <span>{text}</span>
    </div>
  )
}
```

### Call function in component B
```jsx
import React from 'react'
// import function-caller library
import FunctionCaller from 'function-caller'

// import registration key
import { SET_TEXT } from '../A';

export default function B() {
  const onChange = (event) => {
    const { target } = event;
    const newText = target.value;
    // call the function using the function-caller
    FunctionCaller.call(SET_TEXT, newText);
  }
  return (
    <div>
      B Component
      <input onChange={onChange}/>
    </div>
  )
}
```

## License
MIT