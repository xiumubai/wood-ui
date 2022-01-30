import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx'
import { toArray } from '../utils/index';
import { detectFlexGapSupported } from '../utils/dom';

type ItemProps = {
  index: number;
  direction?: 'horizontal' | 'vertical';
  marginDirection: 'marginLeft' | 'marginRight';
  split?: React.ReactNode;
  wrap?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

function SpaceItem({
  className,
  direction,
  index,
  marginDirection,
  children,
  split,
  wrap,
}: ItemProps) {
  const { horizontalSize, verticalSize, latestIndex, supportFlexGap } =
    React.useContext(SpaceContext);

  let style: React.CSSProperties = {};

  if (!supportFlexGap) {
    if (direction === 'vertical') {
      if (index < latestIndex) {
        style = { marginBottom: horizontalSize / (split ? 2 : 1) };
      }
    } else {
      style = {
        ...(index < latestIndex && { [marginDirection]: horizontalSize / (split ? 2 : 1) }),
        ...(wrap && { paddingBottom: verticalSize }),
      }
    }
  }

  if (children === null || children === undefined) {
    return null;
  }

  return (
    <>
      <div className={className} style={style}>
        {children}
      </div>
      {index < latestIndex && split && (
        <span className={`${className}-split`} style={style}>
          {split}
        </span>
      )}
    </>
  )

}

type Align = 'center' | 'flex-start' | 'flex-end' | 'baseline';

type SpaceProps = {

  /**
   * @description       间距大小
   * @description.zh-CN 间距大小
   * @default           8px
   */
  size?: number | [number, number];
  /** 间距方向 */
  /**
   * @description       间距方向
   * @description.zh-CN 间距方向
   * @default           horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /** 对齐方式 */
  /**
   * @description       对齐方式
   * @description.zh-CN 对齐方式
   * @default           center
   */
  align: Align;
  /**
   * @description       设置拆分，可以自定义react元素
   * @description.zh-CN 设置拆分，可以自定义react元素
   * @default           React.ReactNode
   */
  split?: React.ReactNode;
  /**
   * @description       是否自动换行，仅在 horizontal 时有效
   * @description.zh-CN 是否自动换行，仅在 horizontal 时有效
   * @default           false
   */
  wrap?: boolean;
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
};

const flexDirectionMap = {
  horizontal: 'row',
  vertical: 'column',
};

const StyledSpace = styled.div<{
  align: 'center' | 'flex-start' | 'flex-end' | 'baseline';
  direction: 'horizontal' | 'vertical';
}>`
  display: inline-flex;
  flex-direction: ${({ direction }) => flexDirectionMap[direction]};
  align-items: ${({ align }) => align};
`;

const SpaceContext = React.createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: false,
});

const Space: React.FC<SpaceProps> = ((props) => {
  const {
    size = 8,
    align,
    className,
    children,
    direction = 'horizontal',
    split,
    style,
    wrap = false,
    ...rest
  } = props;

  const supportFlexGap = detectFlexGapSupported();

  const [horizontalSize, verticalSize] = React.useMemo(
    () => (Array.isArray(size) ? size : [size, size]),
    [size]
  );

  // 默认不传align为center
  const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  const marginDirection = 'marginRight';

  const childNodes = toArray(children as React.ReactElement[]);
  let latestIndex = 0;
  const nodes = childNodes.map((child, i) => {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }
    /* eslint-disable react/no-array-index-key */
    return (
      <SpaceItem
        className={className}
        key={i}
        direction={direction}
        index={i}
        marginDirection={marginDirection}
        split={split}
        wrap={wrap}
      >
        {child}
      </SpaceItem>
    );
    /* eslint-enable */
  });

  const spaceContext = React.useMemo(
    () => ({ horizontalSize, verticalSize, latestIndex, supportFlexGap }),
    [horizontalSize, verticalSize, latestIndex, supportFlexGap]
  );

  if (childNodes.length === 0) {
    return null;
  }

  const gapStyle: React.CSSProperties = {};

  if (wrap) {
    gapStyle.flexWrap = 'wrap';

    if (!supportFlexGap) {
      gapStyle.marginBottom = -verticalSize;
    }
  }

  if (supportFlexGap) {
    gapStyle.columnGap = horizontalSize;
    gapStyle.rowGap = verticalSize;
  }


  return (
    <StyledSpace
      direction={direction}
      align={mergedAlign}
      style={{
        ...gapStyle,
        ...style,
      }}
      className={clsx(className, 'uc-space')}
      {...rest}
    >
      <SpaceContext.Provider value={spaceContext}>{nodes}</SpaceContext.Provider>
    </StyledSpace>
  );
});

Space.displayName = 'UC-Space';

export default Space;
