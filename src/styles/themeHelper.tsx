import { css } from 'styled-components';
import * as vars from './vars';
/**
 *  get a css snippet with theme color
 *
 * @param {string} prop
 * @param {string} [leftValue='']
 * @return {*}  {*}
 */
export const getThemeColorCss = (prop: string, leftValue = ''): any => {
  return css`
    ${prop}:${leftValue} ${(props) => props.theme.color || vars.primary};
    ${prop}:${leftValue} var(--uc-color, ${vars.primary});
  `;
};
