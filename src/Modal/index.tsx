import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';

type Props = {
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

const StyledModal = styled.div`
  font-size: 14px;
  color: red;
`;

const Modal = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { style, className, children, ...rest } = props;
  return (
    <StyledModal
      className={(clsx('uc-modal', className))}
      style={{...style}}
      ref={ref} {...rest}
    >
      {children}
    </StyledModal>
  );
});

Modal.displayName = 'UC-Modal';

export default Modal;
