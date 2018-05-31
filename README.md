# react-breath-placeholder

> use breath effect to show react placeholder.

[![NPM](https://img.shields.io/npm/v/react-breath-placeholder.svg)](https://www.npmjs.com/package/react-breath-placeholder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![demo gif](https://media.giphy.com/media/47D5aj1KNeXTmJ3J2K/giphy.gif)

[![Edit react-breath-placeholder-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/xr7mmlo964)

## Install

```bash
npm install --save react-breath-placeholder
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-breath-placeholder'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```

## PropTypes
| Prop        | Description                                       | Default                    |
|-------------|---------------------------------------------------|----------------------------|
| style       | you can set component style by your self.(object) | `{width:100, height:100}`  |
| className   | set class name by your self.(string)              | `''`                       |
| loop        | how many loop do you want.(number)                | Infinite                   |
| duration    | keyframe duration millisecond.(number)            | 3000                       |
| backgrounds | array of background color hex.(array)             | `["#bbb", "#ddd", "#bbb"]` |


## License

MIT © [chnbohwr](https://github.com/chnbohwr)
