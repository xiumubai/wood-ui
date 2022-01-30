import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { loadResource, isBrowser } from '../utils/dom';

type Props = {
  /** 图标类型 */
  type: string;
  className?: string;
  style?: React.CSSProperties;
};

const StyledIcon = styled.span`
  display: inine-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertial-align: -0.125em;

  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const SVGProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
};

const Icon: React.ForwardRefExoticComponent<Props> & {
  /**
   * 加载在 iconfont.cn 上自行管理的图标
   *
   * @param {string} scriptUrl
   */
  loadFromIconfontCN?: (scriptUrl: string) => void;
} = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { type, className, style, ...rest } = props;

  return (
    <StyledIcon {...rest} ref={ref} style={{fontSize: '20px', ...style}} className={clsx('uc-icon', className, type)}>
      <svg {...SVGProps}>
        <use xlinkHref={`#${type}`} />
      </svg>
    </StyledIcon>);
});

Icon.displayName = 'UC-Icon';

/**
 * 加载iconfont.cn图标
 *
 * @param {string} scriptUrl
 */
 Icon.loadFromIconfontCN = (scriptUrl: string): void => {
  isBrowser && loadResource(scriptUrl);
};

// load ruc icons
Icon.loadFromIconfontCN('//at.alicdn.com/t/font_2887360_g3pt7gj02t.js');

export default Icon;
