import React from 'react';

/**
 * CodePenOption Example
 * 
 * ```js
 * {
 *   title: `uiw${version} - demo`,
 *   editors: '0010',
 *   js_pre_processor: 'babel',
 *   html: '<div id="container" style="padding: 24px"></div>',
 *   js: jsxCode || '',
 *   css: '',
 *   css_external: `https://unpkg.com/uiw${version}/dist/uiw.min.css`,
 *   js_external: `https://unpkg.com/react@16.x/umd/react.development.js;https://unpkg.com/react-dom@16.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw${version}/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.0.2/index.js`,
 * };
 * ```
 */
export type CodePenOption = {
  title?: string;
  html?: string;
  js?: string;
  css?: string;
  editors?: string;
  css_external?: string;
  js_external?: string;
  js_pre_processor?: string;
}

export type CodepenProps = CodePenOption & React.FormHTMLAttributes<HTMLFormElement>;

const defaultOptions: CodePenOption = {
  editors: '0010',
  js_pre_processor: 'babel',
}

const codepen: React.FC<CodepenProps> = (props) => {
  const { title, html, js, css, editors = defaultOptions.editors, css_external, js_external, js_pre_processor = defaultOptions.js_pre_processor, ...other } = props || {};
  const codePenOption: CodePenOption = { title, html, js, css, editors, css_external, js_external, js_pre_processor };
  return (
    <form action="https://codepen.io/pen/define" method="POST" target="_blank" {...other}>
      <input type="hidden" name="data" value={JSON.stringify(codePenOption)} />
      <button type="submit">{props.children}</button>
    </form>
  );
}

export default codepen;
