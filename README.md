# @ihatecode/react-file-picker

Englist | <a href="https://github.com/zctcode/react-file-picker/blob/main/README-zh_CN.md" target="_blank">中文</a>

<p>
<img alt="npm" src="https://img.shields.io/npm/v/@ihatecode/react-file-picker?logo=npm&color=%234ac41c">
<img alt="npm" src="https://img.shields.io/npm/dm/@ihatecode/react-file-picker?logo=npm&color=%234ac41c">
<img alt="GitHub forks" src="https://img.shields.io/github/forks/zctcode/react-file-picker">
<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/zctcode/react-file-picker">
</p>

# Introduction
**A file picker component written in React.**

## Install
```bash
# npm
npm install @ihatecode/react-file-picker
# yarn
yarn add @ihatecode/react-file-picker
# pnpm
pnpm add @ihatecode/react-file-picker
```

## Usage

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
      <span>Select files</span>
    </FilePicker>
  );
};

export default App;
```

## Demo
Online demo: [https://pjzpz7.csb.app/](https://pjzpz7.csb.app/)

[![Edit react-splitter](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/pjzpz7)

## Props
|Property|Type|Optional
|-|-|:-:
|className|string|Y|
|style|object|Y|
|accept|string|Y|
|multiple|boolean|Y|
|directory|boolean|Y|
|draggable|boolean|Y|
|children|any|Y|
|onChange|(files: FileList) => void|Y|

## License
MIT