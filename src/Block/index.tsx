import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * @description       标题
   * @description.zh-CN 标题
   * @default           无
   */
  title?: string;
  /**
   * @description       内边距
   * @description.zh-CN 内边距
   * @default           12px
   */
  padding?: string;
  /**
   * @description       背景颜色
   * @description.zh-CN 背景颜色
   * @default           40px
   */
  background?: string;
  /**
   * @description       边框
   * @description.zh-CN 边框
   * @default           null
   */
  border?: string;
  /**
   * @description       高度
   * @description.zh-CN 高度
   * @default           null
   */
  height?: string;
  /**
   * @description       自定义样式
   * @description.zh-CN 自定义样式
   * @default           无
   */
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const StyledBlock = styled.div`
  font-size: 14px;

  .title {
    padding: 12px 8px 6px;
    color: #969696;
    font-size: 14px;
  }

  .main {
    border: solid 1px #eee;
    border-right: none;
    border-left: none;
  }
`;

const Block = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { title, padding = '12px', background = '#fff', border, height, style, children, ...rest } = props;

  return (
    <StyledBlock {...rest}>
      <div className="title">{title}</div>
      <div
        className="main"
        style={{
          padding,
          background,
          border,
          height,
          ...style
        }}
      >
        {children}
      </div>
    </StyledBlock>
  );
});

Block.displayName = 'UC-Block';

export default Block;
