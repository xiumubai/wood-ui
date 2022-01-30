import React from 'react';
import { Icon, Space, Block } from '@xiumu/wood-ui';

export default function App() {
  return (
    <>
      <Block title='默认'>
        <Space><Icon type="uc-icon-yonghu" /></Space>
        <Space><Icon type="uc-icon-gouwuche" /></Space>
      </Block>
      <Block title='自定义样式'>
        <Space><Icon type="uc-icon-yonghu" style={{ fontSize: 30, color: '#005cff'}} /></Space>
      </Block>
    </>
  );
}
