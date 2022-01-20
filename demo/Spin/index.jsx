import React from 'react';
import { Block, Space, Spin } from '@xiumu/wood-ui';

export default function App() {
  return (
    <>
      <Block title="默认">
        <Space>
          <Spin />
          <Spin style={{ color: '#005cff' }}></Spin>
          <Spin style={{ color: 'red', fontSize: 20}}></Spin>
        </Space>
      </Block>
    </>
  );
}
