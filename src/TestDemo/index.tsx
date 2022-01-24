import React from 'react';
import styled from 'styled-components';

type Props = {
  /** 标题 */
  title?: string;
  children?: React.ReactNode;
};

const StyledTestDemo = styled.div`
  font-size: 14px;
  color: red;
`;

const TestDemo = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { title, children, ...rest } = props;

  return <StyledTestDemo {...rest}>{title}</StyledTestDemo>;
});

TestDemo.displayName = 'UC-TestDemo';

export default TestDemo;
