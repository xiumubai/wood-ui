import React from 'react';
import styled from 'styled-components';

type Props = {
  /** 标题 */
  title?: string;
  children?: React.ReactNode;
};

const StyledDemo = styled.div`
  font-size: 14px;
  color: red;
`;

const Demo = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { title, children, ...rest } = props;

  return <StyledDemo {...rest}>{title}</StyledDemo>;
});

Demo.displayName = 'UC-Demo';

export default Demo;
