# @ihatecode/react-file-picker

<a href="https://github.com/zctcode/react-file-picker/blob/main/README.md" target="_blank">Englist</a> | 中文

<p>
<img alt="npm" src="https://img.shields.io/npm/v/@ihatecode/react-file-picker?logo=npm&color=%234ac41c">
<img alt="npm" src="https://img.shields.io/npm/dm/@ihatecode/react-file-picker?logo=npm&color=%234ac41c">
<img alt="GitHub forks" src="https://img.shields.io/github/forks/zctcode/react-file-picker">
<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/zctcode/react-file-picker">
</p>

# 介绍
**一个用 React 编写的用于选择本地文件的组件**

## 安装
```bash
# npm
npm install @ihatecode/react-file-picker
# yarn
yarn add @ihatecode/react-file-picker
# pnpm
pnpm add @ihatecode/react-file-picker
```

## 使用

```jsx
import React from 'react';
import FilePicker from '@ihatecode/react-file-picker';
import '@ihatecode/react-file-picker/lib/style.css';

const App: React.FC = () => {
  return (
    <FilePicker
        multiple
        accept="image/*"
        onChange={(files) => console.log(files)}
    >
      <span>选择文件</span>
    </FilePicker>
  );
};

export default App;
```

## 示例
在线预览: [https://pjzpz7.csb.app/](https://pjzpz7.csb.app/)

[![Edit react-splitter](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/pjzpz7)

## 属性
|属性|类型|是否必须|描述|
|-|-|:-:|-|
|className|string|否|自定义类样式|
|style|object|否|自定义样式|
|accept|string|否|接受的文件类型|
|multiple|boolean|否|是否多选|
|directory|boolean|否|是否文件夹模式|
|draggable|boolean|否|是否支持拖拽选择|
|children|any|否||
|onChange|(files: FileList) => void|否||

## 许可证
MIT