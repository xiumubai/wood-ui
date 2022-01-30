import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from '../styles/vars';
import { isMobile } from '../utils/dom';
import { getThemeColorCss } from '../styles/themeHelper';
import Spin from '../Spin';
import Space from '../Space';

type Props = {
  /**
   * @description       默认主题，default 线框，primary 实色框
   * @description.zh-CN 间距大小
   * @default           default
   */
  type?: 'default' | 'primary';

  /**
   * @description       线框使用主题色
   * @description.zh-CN 线框使用主题色
   * @default           false
   */
  active?: boolean;

  /**
   * @description       禁用
   * @description.zh-CN 禁用
   * @default           false
   */
  disabled?: boolean;

  /**
   * @description       按钮类型
   * @description.zh-CN 按钮类型
   * @default           undefined
   */
  htmlType?: 'submit' | 'reset' | 'button' | undefined;

  /**
   * @description       块级按钮
   * @description.zh-CN 块级按钮
   * @default           false
   */
  block?: boolean;

  /**
   * @description       圆形按钮
   * @description.zh-CN 圆形按钮
   * @default           false
   */
  circle?: boolean;

  /**
   * @description       虚线边
   * @description.zh-CN 虚线边
   * @default           false
   */
  dashed?: boolean;

  /**
   * @description       设置危险按钮
   * @description.zh-CN 设置危险按钮
   * @default           false
   */
  danger?: boolean;

  /**
   * @description       设置为展示的标签，比如div,a,button
   * @description.zh-CN 设置为展示的标签，比如div,a,button
   * @default           null
   */
  as?: any;

  /**
   * @description       设置按钮的图标组件
   * @description.zh-CN 设置按钮的图标组件
   * @default           null
   */
  icon?: React.ReactNode;

  /**
   * @description       设置按钮加载状态
   * @description.zh-CN 设置按钮加载状态
   * @default           false
   */
  loading?: boolean;

  /**
   * @description       是否幽灵按钮
   * @description.zh-CN 是否幽灵按钮
   * @default           false
   */
  ghost?: boolean;

  /**
   * @description       点击后，下次能点击的时间间隔，防止重复点击, 如果是true, 间隔默认是1s
   * @description.zh-CN 点击后，下次能点击的时间间隔，防止重复点击, 如果是true, 间隔默认是1s
   * @default           1000ms
   */
   wait?: number | boolean;

  /**
   * @description       点击回调
   * @description.zh-CN 点击回调
   * @default           --
   */
  onClick?: (e: React.SyntheticEvent) => void;

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
    children,
    ...rest
  } = props;

  const [waiting, setWaiting] = useState(false);
  const [isClick, setIsClick] = useState(disabled);

  const waitTime =
    typeof wait === 'number' && wait > 0
      ? wait
      : typeof wait === 'boolean' && wait === true
      ? 1000
      : 0;

  const usingWait = waitTime > 0;

  const icon = props.icon || (loading || waiting ? <Spin /> : null);

  return (
    <StyledButton
      {...rest}
      ref={ref}
      disabled={isClick}
      type={htmlType}
      onClick={(e: React.SyntheticEvent<Element, Event>) => {
        onClick?.(e);
        if (typeof onClick === 'function' && usingWait) {
          setWaiting(true);
          setIsClick(true);
          setTimeout(() => {
            setWaiting(false);
            setIsClick(false);
          }, waitTime);
        }
      }}
      className={clsx(
        'uc-btn',
        type,
        {
          disabled: isClick || loading,
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
      <Space align="baseline">
        {icon}
        {children}
      </Space>
    </StyledButton>
  );
});

Button.displayName = 'UC-Button';

export default Button;
