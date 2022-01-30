import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Icon from '../Icon';

type Props = {
  /** 默认尺寸，默认40px */
  size?: number;
  /** 形状，默认circle */
  shape?: 'circle' | 'square';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const StyledAvatar = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: inline-flex;
  overflow: hidden;
  color: #666;
  wihte-space: nowrap;
  text-align: center;
  vartical-align: middle;
  align-items: center;
  justify-content: center;
  background: #ccc;

  &.circle {
    border-radius: 50%;
  }

  &.square {
    border-radius: 2px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const Avatar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { size = 40, shape = 'circle', style, className, children, ...rest } = props;
  const s  = { width: size, height: size, fontSize: size * 0.6, ...style};
  return (
    <StyledAvatar
      className={(clsx('uc-avatar', className, shape))}
      style={s}
      ref={ref}
      {...rest}
    >
      {children || <Icon type="uc-icon-avatar" />}
    </StyledAvatar>
  );
});

Avatar.displayName = 'UC-Avatar';

export default Avatar;
