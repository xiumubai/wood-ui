import React from 'react';
import { Button, Block } from 'wood-ui';

export default function App() {
  return (
    <>
      <Block title="基础按钮">
        <Button>Default</Button>
        <Button active>Outline</Button>
        <Button danger>Danger</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary" danger>
          Primary
        </Button>
      </Block>

      <Block title="块级按钮">
        <Button block>Block default</Button>
        <Button block type="primary">
          Block primary
        </Button>
        <Button block danger dashed>
          Block danger
        </Button>
      </Block>

      <Block title="幽灵按钮" background="#333">
        <Button block ghost>
          default
        </Button>

        <Button block ghost active>
          active
        </Button>

        <Button ghost block danger dashed>
          danger dashed
        </Button>
      </Block>

      <Block title="禁用状态">
        <Button disabled>Disabled</Button>
        <Button disabled type="primary">
          Disabled
        </Button>
        <Button disabled danger>
          Disabled
        </Button>
      </Block>

      <Block title="链接按钮">
        <Button as="a">Anchor</Button>
        <Button as="a" style={{ color: '#333', textDecoration: 'underline' }}>
          Anchor
        </Button>
        <Button as="a" danger>
          Anchor
        </Button>
      </Block>

      <Block title="按钮形状">
        <Button>Default Button</Button>
        <Button style={{ borderRadius: 20 }}>Rounded Button</Button>
        <Button style={{ borderRadius: 0 }}>Rect Button</Button>
        <Button circle>X</Button>
        <Button type="primary">Default Button</Button>
        <Button type="primary" style={{ borderRadius: 20 }}>
          Rounded Button
        </Button>
      </Block>

      <Block title="加载状态">
        <Button loading>加载中</Button>
        <Button type="primary" loading>
          加载中
        </Button>
        <Button type="primary" danger loading>
          Loading
        </Button>
      </Block>
    </>
  );
}
