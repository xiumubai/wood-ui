import React from 'react';
import { Block, Button, Modal } from '@xiumu/wood-ui';

export default function App() {
  return (
    <>
      <Block title="默认用法">
        <Button type="primary">打开弹框</Button>
      </Block>

      <Block title="自定义样式">
        <Button>打开弹框</Button>
      </Block>
    </>
  );
}
