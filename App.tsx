import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      background-clip： 用于设置背景的延伸区域
      border/padding/content-box：延伸至border/padding/content-box的外边框内
      默认为border-box
      <div className="wrapper">
        <div className="border-box box"></div>
        <div className="content-box box"></div>
        <div className="padding-box box"></div>
      </div>
    </div>
  );
}
