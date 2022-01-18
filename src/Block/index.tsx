import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

type Props = {
  /** 标题 */
  title?: string;
  /** 内边距 */
  padding?: string;
  /** 背景颜色 */
  background?: string;
  /** 边框 */
  border?: string;
  /** 高度 */
  height?: string;
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
  const { title, padding = '12px', background = '#fff', border, height, children, ...rest } = props;

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
        }}
      >
        {children}
      </div>
    </StyledBlock>
  );
});

Block.displayName = 'UC-Block';

export default Block;
