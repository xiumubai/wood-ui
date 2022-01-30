import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Icon from '../Icon';

type Props = {
  /**
   * @description       尺寸
   * @description.zh-CN 尺寸
   * @default           40px
   */
  size?: number;
  /**
   * @description       形状
   * @description.zh-CN 形状
   * @default           circle
   */
  shape?: 'circle' | 'square';
  /**
   * @description       自定义className
   * @description.zh-CN 自定义className
   */
  className?: string;
  /**
   * @description       自定义style
   * @description.zh-CN 自定义style
   */
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
  const s = { width: size, height: size, fontSize: size * 0.6, ...style};
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
