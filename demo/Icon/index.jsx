import React from 'react';
import { Icon, Space, Block } from '@xiumu/wood-ui';

export default function App() {
  return (
    <>
      <Block title='默认'>
        <Icon type="uc-icon-yonghu" />
        <Icon type="uc-icon-gouwuche" />
      </Block>

      <Block title='自定义样式'>
        <Space>
          <Icon type="uc-icon-yonghu" style={{ fontSize: 30, color: 'blue' }} />
        </Space>
      </Block>
    </>
  );
}
