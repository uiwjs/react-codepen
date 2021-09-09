React Codepen
===

<!--dividing-->

[![Build & Deploy](https://github.com/uiwjs/react-codepen/workflows/Build%20&%20Deploy/badge.svg)](https://github.com/uiwjs/react-codepen/actions)
[![npm version](https://img.shields.io/npm/v/@uiw/react-codepen.svg)](https://www.npmjs.com/package/@uiw/react-codepen)
[![](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-codepen/file/README.md)

A React component is provided that allows you to programmatically generate [codepen](https://codepen.io/) projects from code samples on the fly.

## Install

```bash
npm install @uiw/react-codepen --save
```

## Usage

```jsx
import React from 'react';
import Codepen from '@uiw/react-codepen';

const code = `import { Button, Divider, Icon } from 'uiw';

ReactDOM.render(
  <div>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">错误按钮</Button>
    <Button type="light">亮按钮</Button>
    <Button type="dark">暗按钮</Button>
  </div>,
  document.getElementById("root")
);`;

const Example = () => {
  return (
    <Codepen
      title="uiw v4.7.2 - demo"
      html={`<div id="root"></div>`}
      css_external="https://unpkg.com/uiw@4.7.2/dist/uiw.min.css"
      js={code}
      js_external="https://unpkg.com/react@16.x/umd/react.development.js;https://unpkg.com/react-dom@16.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@4.7.2/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.0.2/index.js"
    >
      Basic Example Open in Codepen
    </Codepen>
  )
}
```

## Props

```typescript
type CodePenOption = {
  title?: string;
  html?: string;
  js?: string;
  css?: string;
  editors?: string;
  css_external?: string;
  js_external?: string;
  js_pre_processor?: string;
}

type CodepenProps = CodePenOption & React.FormHTMLAttributes<HTMLFormElement>;
```

## Development

Runs the project in development mode.  

```bash
# Step 1, run first, listen to the component compile and output the .js file
# listen for compilation output type .d.ts file
npm run watch
# Step 2, development mode, listen to compile preview website instance
npm run start
```

**production**

Builds the app for production to the build folder.

```bash
npm run build
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### Related

- [`@uiw/react-stackblitz`](https://github.com/uiwjs/react-stackblitz)
- [`@uiw/react-codesandbox`](https://github.com/uiwjs/react-codesandbox)

### License

Licensed under the MIT License.
