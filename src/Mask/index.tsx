import React, { useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

type Props = {
  visible: boolean;
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

const StyledMask = styled.div`
  background: rgba(0, 0, 0);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  transition: opacity 0.22s linear;

  &.from {
    opacity: 0.4;
  }
  &.to {
    opacity: 0.45;
  }

`;

const defaultStyle = {
  transition: `opacity 500ms ease-in-out`,
  opacity: 0,
}

const transitionStyles:any = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const Mask = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { visible, style, className, children, ...rest } = props;
  const [inProp, setInProp] = useState(false);
  return (
    <>
      <Transition in={inProp} timeout={500}>
        {
          state => {
            <div>
              I'm a fade Transition!
            </div>
          }
        }
      </Transition>
      { inProp ? 'show' : 'hide' }
      <button onClick={() => setInProp(!inProp)}>
          Click to Enter
      </button>
    </>
  );
});

Mask.displayName = 'UC-Mask';

export default Mask;
