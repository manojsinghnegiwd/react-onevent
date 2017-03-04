React OnEvent
=====================
> Handle enter and spacebar event with OnEvent

OnEvent is a react stateless functional component which binds a onKeyPress eventlistener to its children component , whenever it detects a spacebar or enter on children component it calls the provided function with event as the argument.

##### Note: OnEvent just takes 1 children providing it multiple will result in error.

Installation
------------
```sh
npm install react-onevent --save
````
Usage
---
````javascript
import React from 'react';
import ReactDOM from 'react-dom';
import OnEvent from 'react-onevent';
ReactDOM.render(
<OnEvent enter={ (event) => { console.log( 'enter key pressed') } } space={ (event) => { console.log( 'space key pressed') } }>
    <input type="text" />
</OnEvent>, document.getElementById('page'));
````
Props
-----
## enter
pass a function to call when enter key is pressed on the child component.
```html
<OnEvent enter={ (event) => { console.log( 'enter key pressed') } }>
    <input type="text" />
</OnEvent>
```

## space
pass a function to call when spacebar is pressed on the child component.
```html
<OnEvent space={ (event) => { console.log( 'space key pressed') } }>
    <input type="text" />
</OnEvent>
```

Using this ? then please star this component and feel free to contribute.

### About Me

 * [My website](http://manojsinghnegi.com) (manojsinghnegi.com)
 * [Github](http://github.com/manojsinghnegiwd) (@manojsinghnegiwd)
 * [Twitter](http://twitter.com/manojnegiwd) (@manojnegiwd)