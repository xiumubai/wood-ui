import React from 'react';
import { Button, Block, Space } from '@xiumu/wood-ui';

export default function App() {
  return (
    <>
      <Block title="基础按钮">
        <Space>
          <Button>Default</Button>
          <Button disabled type="primary">disabled</Button>
          <Button active>Outline</Button>
          <Button danger>Danger</Button>
          <Button type="primary">Primary</Button>
          <Button type="primary" danger>
            Primary
          </Button>
        </Space>
      </Block>

      <Block title="块级按钮">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button block>Block default</Button>
          <Button block type="primary">
            Block primary
          </Button>
          <Button block danger dashed>
            Block danger
          </Button>
        </Space>
      </Block>

      <Block title="幽灵按钮" background="#333">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button block ghost>
            default
          </Button>

          <Button block ghost active>
            active
          </Button>

          <Button ghost block danger dashed>
            danger dashed
          </Button>
        </Space>
      </Block>

      <Block title="禁用状态">
        <Space>
          <Button disabled>Disabled</Button>
          <Button disabled type="primary">
            Disabled
          </Button>
          <Button disabled danger>
            Disabled
          </Button>
        </Space>
      </Block>

      <Block title="链接按钮">
        <Space>
          <Button as="a">Anchor</Button>
          <Button as="a" style={{ color: '#333', textDecoration: 'underline' }}>
            Anchor
          </Button>
          <Button as="a" danger>
            Anchor
          </Button>
        </Space>
      </Block>

      <Block title="按钮形状">
        <Space>
          <Button>Default Button</Button>
          <Button style={{ borderRadius: 20 }}>Rounded Button</Button>
          <Button style={{ borderRadius: 0 }}>Rect Button</Button>
          <Button circle>X</Button>
          <Button type="primary">Default Button</Button>
          <Button type="primary" style={{ borderRadius: 20 }}>
            Rounded Button
          </Button>
        </Space>
      </Block>

      <Block title="加载状态">
        <Space>
          <Button loading>加载中</Button>
          <Button type="primary" loading>
            加载中
          </Button>
          <Button type="primary" danger loading>
            Loading
          </Button>
        </Space>
      </Block>

      <Block title="防止重复click">
        <Space wrap>
          <Button
            active
            wait
            onClick={() => {
              console.log(1);
            }}
          >
            1s内点一次
          </Button>

          <Button
            active
            wait={2000}
            onClick={() => {
              console.log(2);
            }}
          >
            2s内点一次
          </Button>
        </Space>
      </Block>
    </>
  );
}
