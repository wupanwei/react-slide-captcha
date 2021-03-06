# react-slide-captcha

![GitHub](https://img.shields.io/github/license/Roxyhuang/react-slide-captcha.svg)
[![Build Status](https://travis-ci.org/boennemann/badges.svg?branch=master)](https://travis-ci.org/boennemann/badges)
[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)
[![codecov](https://codecov.io/gh/Roxyhuang/react-slide-captcha/branch/master/graph/badge.svg)](https://codecov.io/gh/Roxyhuang/react-slide-captcha)
## 1.如何使用

### (1) 安装

```bash
npm i -S react-slide-captcha
```

### (2) 依赖

```markdown
1. react 
2. react-dom
```

### (3) 引入

```javascript
import SlideCaptcha from 'react-slide-captcha';
import 'react-slide-captcha/dist/styles.css';

<SlideCaptcha
   puzzleUrl={this.state.puzzleUrl}
   bgUrl={this.state.bgUrl}
   onRequest={this.resultCallback}
   containerClassName="test"
/>
```

## 2 在线预览

### (1) 桌面Demo

[\[Desktop Demo\]](https://roxyhuang.github.io/react-slide-captcha.github.io/preview/index.html)

### (2) 移动Demo

![](https://raw.githubusercontent.com/Roxyhuang/react-slide-captcha/master/src/assets/img/qrcode.png)

## 3 参数 （2.x）


| 参数 | 说明 | 类型 | 默认值|
| ------ | ------ | ------ |----------|
| **puzzleUrl** | 拼图图片地址（必填） | string | - |
| **bgUrl** | 背景图片地址（必填） | string | - |
| **onRequest** | 回调（必填）  | (validateValue: number, validatedSuccess: any, validatedFail?: any) => void| - |
| **slidedImage** | 滑块元素（可选）  | JSX.Element |  '默认滑块元素' 
| **slidedImageMoving** | 移动中滑块元素（可选）  | JSX.Element | '默认移动中滑块元素' |
| **slidedImageSuccess** | 验证成功滑块元素（可选） | JSX.Element | '默认成功滑块元素' 
| **slidedImageError** | 验证失败滑块元素（可选） | JSX.Element | '默认失败滑块元素' 
| **containerClassName** | 容器样式类名（可选） | any | -|
| **style**| 容器样式（可选） | object | - |
| **tipsText**| 提示文字（可选） | string | - |
| **tipsClassName** | 提示文字样式类名（可选） | any | -|
| **tipsStyle**| 提示文字样式（可选） | object | - |
| **robotValidate**| 机器人校验配置（可选） | object: {  offsetY: number, handler: () => any,} | - |
| **reset**| 组件刷新方式（可选） | string | auto |
| **resetButton**| reset组件显示类型 **none/inline/outline**（可选） | JSX.Element | 'auto' |
| **resetButtonElement**| reset 组件元素（可选） | string | '默认重置按钮元素' |
| **onReset**| 组件刷新回调（可选） | () => any | - |
| **imagePosition**| 图片显示位置 **top/bottom** （可选） | string | 'bottom' |
| **isLoading**| 加载状态（可选） | boolean | false |
| **loadingIcon**| 加载图标（可选） | JSX.Element | defalut loading svg |
| **displayType**| 显示类型 **hover/static**（可选） | string | 'hover' |
| **hoverPanelStyle**| 触发式组件的操作部分样式（可选） | object | - |
| **hoverPanelClassName**| 触发式组件的操作部分名（可选） | string| - |

## 4 License

MIT license

MIT

