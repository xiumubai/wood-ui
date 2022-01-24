import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  /** 图标类型 */
  type: string;
};

const StyledIcon = styled.div`
  font-size: 14px;
  color: red;
`;

const Icon = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { type, children, ...rest } = props;
  console.log({...rest});

  return <StyledIcon {...rest}></StyledIcon>;
});

Icon.displayName = 'UC-Icon';

export default Icon;
