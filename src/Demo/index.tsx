import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';

type Props = {
  /**
   * @description       自定义className
   * @description.zh-CN 自定义className
   * @default           null
   */
  className?: string;
  /**
   * @description       自定义style
   * @description.zh-CN 自定义style
   * @default           null
   */
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const StyledDemo = styled.div`
  font-size: 14px;
  color: red;
`;

const Demo = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { style, className, children, ...rest } = props;
  return (
    <StyledDemo
      className={(clsx('uc-avatar', className))}
      style={{...style}}
      ref={ref} {...rest}
    >
      {children}
    </StyledDemo>
  );
});

Demo.displayName = 'UC-Demo';

export default Demo;
