import Codepen from '../';

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
      js={code || ''}
      // eslint-disable-next-line no-template-curly-in-string
      js_external="https://unpkg.com/react@16.x/umd/react.development.js;https://unpkg.com/react-dom@16.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@4.7.2/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.0.2/index.js"
    >
      Basic Example Open in Codepen
    </Codepen>
  )
}

export default Example;