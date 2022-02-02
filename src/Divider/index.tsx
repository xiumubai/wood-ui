import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import * as vars from '../styles/vars';

type Props = {
  /**
   * @description       分割线水平还是垂直
   * @description.zh-CN 分割线水平还是垂直
   * @default           horizontal
   */
   type?: 'horizontal' | 'vertical';
  /**
   * @description       分割标题的位置
   * @description.zh-CN 分割标题的位置
   * @default           center
   */
  textPosition?: 'left' | 'right' | 'center';
  /**
   * @description       是否是虚线
   * @description.zh-CN 是否是虚线
   * @default           false
   */
   dashed?: boolean;
   /**
   * @description       分割线的颜色
   * @description.zh-CN 分割线的颜色
   * @default           #eee
   */
    color?: string;
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

const StyledDivider = styled.div`
  font-size: 14px;
  box-sizinig: border-box;
  margin: 16px 0;
  c9lor: #0000d9;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  border: none;
  border-top: 1px solid ${({ color }) => color};

  &.horizontal {
    display: flex;
    clear: both;
    width: 100%;
    min-width: 100%;
  }


  &.vertical {
    postion: relative;
    top: -0.06em;
    display: inline-block;
    height: 0.9em;
    margin: 0 8px;
    vertical-align: middle;
    border-top: 0;
    border-left: 1px solid ${({ color }) => color}
  }

  &.dashed {
    border-top-style: dashed;
  }

  &.text {
    border-top: 0;
    .inner-text {
      display: inline-block;
      padding: 0 1em;
      white-space: nowrap;
      text-align: center;
    }
    &::before,
    &::after {
      width: 50%;
      border-top: 1px solid ${({ color }) => color};
      transform: translateY(50%);
      content: '';
    }

    &.dashed {
      &::before,
      &::after {
        border-top-style: dashed;
      }
    }

    &.left {
      &::before {
        width: 5%;
      }
      &::after {
        width: 95%;
      }
    }
    &.right {
      &::before {
        width: 95%;
      }
      &::after {
        width: 5%;
      }
    }
  }

`;

const Divider = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    color = vars.border,
    type='horizontal',
    textPosition = 'center',
    dashed,
    style,
    className,
    children,
    ...rest
  } = props;

  const hasText = !!children;
  return (
    <StyledDivider
      className={(clsx('uc-divider', type, { dashed: dashed, text: hasText }, hasText ? textPosition : '', className))}
      color={color}
      style={{...style}}
      ref={ref}
      {...rest}
    >
      { hasText ? <span className="inner-text">{children}</span> : null }
    </StyledDivider>
  );
});

Divider.displayName = 'UC-Divider';

export default Divider;
