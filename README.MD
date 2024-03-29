# React Loadify

[![Downloads](https://img.shields.io/npm/dt/react-loadify.svg?style=flat&color=success)](https://www.npmjs.com/package/react-loadify)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/react-loadify)
[![Build Size](https://img.shields.io/bundlejs/size/react-loadify)](https://pkg-size.dev/react-loadify)
[![Version](https://img.shields.io/npm/v/react-loadify?style=flat&color=success)](https://www.npmjs.com/package/react-loadify)
<a href="https://pkg-size.dev/react-loadify"><img src="https://pkg-size.dev/badge/install/103906" title="Install size for react-loadify"></a>
<a href="https://pkg-size.dev/react-loadify"><img src="https://pkg-size.dev/badge/bundle/24854" title="Bundle size for react-loadify"></a>

## Installation

```bash
npm i react-loadify
# or
# yarn add react-loadify
```

## Import

```js
import { DSpinner } from "react-loadify";
import "react-loadify/dist/react-loadify.min.css";
```

## Examples

### DSpinner

```js
<DSpinner size={100} color="red" borderWidth={10} speed={1000} />
```

#### DSpinner Props

- color (string, optional): Specifies the color of the spinner. Default value is '#fff'.
- size (number, optional): Specifies the size of the spinner in pixels. Default value is 48.
- speed (number, optional): Specifies the speed of the spinner animation in milliseconds. Default value is 1500.
- borderWidth (number, optional): Specifies the width of the spinner's border in pixels. Default value is 5.

### DDot

```js
<DDot size={100} color="red" speed={1000} />
```

#### DDot Props

- color (string, optional): Specifies the color of the spinner. Default value is '#fff'.
- size (number, optional): Specifies the size of the spinner in pixels. Default value is 48.
- speed (number, optional): Specifies the speed of the spinner animation in milliseconds. Default value is 1500.

### DBar

```js
<DBar size={100} color="red" speed={1000} />
```

#### DBar Props

- color (string, optional): Specifies the color of the spinner. Default value is '#fff'.
- size (number, optional): Specifies the size of the spinner in pixels. Default value is 48.
- speed (number, optional): Specifies the speed of the spinner animation in milliseconds. Default value is 1500.
