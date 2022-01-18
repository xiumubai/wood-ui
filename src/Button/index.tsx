import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from '../styles/vars';
import { isMobile } from '../utils/dom';
import { getThemeColorCss } from '../styles/themeHelper';
type Props = {
  /** default 线框，primary 实色框 */
  type?: 'default' | 'primary';
  /** 线框使用主题色 */
  active?: boolean;
  /** 禁用 */
  disabled?: boolean;
  /** 自定义style */
  style?: React.CSSProperties;
  /** 按钮类型 */
  htmlType?: 'submit' | 'reset' | 'button' | undefined;
  /** 块级按钮 */
  block?: boolean;
  children?: React.ReactNode;
  /** 自定义className */
  className?: string;
  /** 圆形按钮 */
  circle?: boolean;
  /** 虚线边 */
  dashed?: boolean;
  /** 设置危险按钮 */
  danger?: boolean;
  /** 设置为展示的标签，比如div,a,button */
  as?: any;
  /** 设置按钮的图标组件 */
  icon?: React.ReactNode;
  /** 设置按钮加载状态 */
  loading?: boolean;
  /** 是否幽灵按钮 */
  ghost?: boolean;
  /** 点击回调 */
  onClick?: (e: React.SyntheticEvent) => void;
  /** 点击后，下次能点击的时间间隔，防止重复点击, 如果是true, 间隔默认是1s  */
  wait?: number | boolean;
};

const StyledButton = styled.button`
  color: inherit;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  box-sizing: border-box;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  appearance: none;
  -webkit-tap-highlight-color: transparent;

  font-weight: 400;
  white-space: nowrap;
  background-image: none;
  transition: all 0.3s ease;
  user-select: none;
  touch-action: manipulation;
  padding: 4px 16px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid transparent;
  height: 32px;

  &.default {
    background-color: #fff;
    border-color: ${vars.border};

    ${isMobile ? '&:active' : '&:hover'} {
      opacity: 0.8;
    }

    &.pc:hover,
    &.active {
      ${getThemeColorCss('border-color')}
      ${getThemeColorCss('color')}
    }

    &.mobile:active {
      background-color: ${vars.activeBg};
    }

    &.danger,
    &.danger:hover,
    &.danger:active {
      color: ${vars.danger};
      border-color: ${vars.danger};
    }
  }

  &.primary {
    ${getThemeColorCss('background-color')}
    ${getThemeColorCss('border-color')}
    color: #fff;

    ${isMobile ? '&:active' : '&:hover'} {
      opacity: 0.8;
    }

    &.danger,
    &.danger:hover,
    &.danger:active {
      background-color: ${vars.danger};
      border-color: ${vars.danger};
    }
  }

  &.disabled,
  &.disabled:hover,
  &.disabled:active {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }

  &.block {
    width: 100%;
  }

  &.circle {
    min-width: 32px;
    padding: 0;
    border-radius: 50%;
  }

  &.dashed {
    border-style: dashed;
  }

  &.ghost,
  &.ghost:hover {
    color: ${vars.border};
    background-color: transparent;
    border-color: ${vars.border};
  }

  &.anchor {
    margin: unset;
    padding: unset;
    background: unset;
    border: none;
    ${getThemeColorCss('color')}
    height: unset;
  }
`;
const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    children,
    type = 'default',
    disabled,
    block,
    active,
    danger,
    circle,
    dashed,
    loading,
    ghost,
    className,
    htmlType,
    onClick,
    wait,
    ...rest
  } = props;

  // const [waiting, setWaiting] = useState(false);

  // const waitTime =
  //   typeof wait === 'number' && wait >　０
  //     ? wait
  //     : typeof wait === 'boolean' && wait === true
  //     ? 1000
  //     : 0;
  // const usingWait = waitTime > 0;

  // const icon = props.icon || (loading || waiting ? 1 : null);

  return (
    <StyledButton
      {...rest}
      ref={ref}
      disabled={disabled}
      type={htmlType}
      // onClick={(e) => {
      //   onClick?.(e);
      //   if (typeof onClick === 'function' && usingWait) {
      //     setWaiting(true);
      //     setTimeout(() =>{
      //       setWaiting(false);
      //     }, waitTime)
      //   }
      // }}
      className={clsx(
        'uc-btn',
        type,
        {
          disabled: disabled || loading,
          block: block,
          danger: danger,
          circle: circle,
          dashed: dashed,
          ghost: ghost,
          pc: !isMobile,
          anchor: rest.as === 'a',
          active,
        },
        className,
      )}
    >
      {children}
    </StyledButton>
  );
});

Button.displayName = 'UC-Button';

export default Button;
