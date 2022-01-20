import React from 'react';
import { Block, Space, Button } from '@xiumu/wood-ui';

export default function App() {
  return (
    <>
      <Block title="基本用法">
        <Space>
          <Button>button</Button>
          <Button type="primary">primary</Button>
        </Space>
      </Block>

      <Block title="垂直间距">
        <Space direction="vertical">
          <Button>button</Button>
          <Button type="primary">primary</Button>
        </Space>
      </Block>

      <Block title="间距大小">
        <Space size={30}>
          <Button>button</Button>
          <Button type="primary">primary</Button>
        </Space>
      </Block>

      <Block title="对齐方式">
        <Space align="flex-end" style={{ marginBottom: '8px' }}>
          <Button>button</Button>
          <Button type="primary">primary</Button>
          <span>flex-end</span>
        </Space>
        <br />
        <Space align="flex-start">
          <Button>button</Button>
          <Button type="primary">primary</Button>
          <span>flex-start</span>
        </Space>
      </Block>

      <Block title="自动换行">
        <Space wrap>
          <Button>button</Button>
          <Button type="primary">primary</Button>
          <Button>button</Button>
          <Button type="primary">primary</Button><Button>button</Button>
          <Button type="primary">primary</Button><Button>button</Button>
          <Button type="primary">primary</Button><Button>button</Button>
          <Button type="primary">primary</Button><Button>button</Button>
          <Button type="primary">primary</Button><Button>button</Button>
          <Button type="primary">primary</Button>
        </Space>
      </Block>

      <Block title="分隔符">
        <Space split={<span>|</span>}>
          <Button>button</Button>
          <Button type="primary">primary</Button>
        </Space>
      </Block>
    </>
  );
}
