import React from 'react';
import { Block, Divider } from '@xiumu/wood-ui';

export default function App() {
  return (
    <>
      <Block title="基础分割线">
        <p>这是一段话</p>
        <Divider/>
        <p>这还是一段话</p>
      </Block>

      <Block title="垂直分隔线">
        Text
        <Divider type="vertical" />
        <a href="#">Link</a>
        <Divider type="vertical" />
        <a href="#">Link</a>
        <Divider type="vertical" color="red" style={{ margin: '0 20px' }} />
        <a href="#">Link</a>
      </Block>

      <Block title="带内容的分割线">
        <Divider dashed>默认内容在中间</Divider>
        <Divider textPosition="left">默认内容在左侧</Divider>
        <Divider textPosition="right">默认内容在右侧</Divider>
      </Block>

      <Block title="自定义样式">
        <Divider dashed color="#1677ff" style={{ color: 'red', fontSize: 20 }}>
          自定义样式
        </Divider>
      </Block>
    </>
  );
}
