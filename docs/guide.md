---
title: 介绍
order: 0
group:
  title: 介绍
nav:
  title: '组件'
  path: /components
---

组件库介绍

## 组件列表

#### 1. 基础组件

- Button (按钮)
- Mask (遮罩)
- Divider (分割线)
- Space (间距容器)
- HairLineBox (包含 1px 的边的容器 div)
- Avatar (头像)
- Icon (图标,包含加载在 iconfont.cn 上自行管理的图标)

#### 2. 操作反馈

- Drawer (抽屉)
- Modal (弹框)
- Pullup (上拉加载数据)
- AlertDialog (移动端/pc 端两种风格的 alert/confirm 弹窗,支持静态调用)
- Popover (弹出带箭头的浮层)
- Drag (拖拽)
- Tooltip (文字提示)
- PopConfirm (弹出气泡式的确认框)
- Toast (黑背景提示,支持静态调用)
- Notify (顶部全局消息通知,支持静态调用)
- ActionSheet (移动端,动作面板)
- FingerGestureElement (移动端手势操作,onTap,onDoubleTap,onLongTap,onPinch, onSwipe,onPressMove 等手势支持)
- Switch (开关)
- Skeleton（骨架屏）
- CopyToClipboard (复制文本到剪贴板)
- Spin（加载中指示器）
- ScrollTop (平滑滚动到顶部)

#### 3. 导航组件

- Tabs (选项卡切换)
- Affix (将页面元素钉在可视范围)
- Steps (步骤条)
- PopMenu (弹出菜单)

### 4. 数据录入

- Checkbox (复选框)
- CheckboxGroup (复选框列表)
- Radio (单选框)
- RadioGroup (单选框列表)
- Input (单行/多行输入框)
- PasswordInput (移动端/pc, 密码输入框 )
- NumberKeyboardBase (数字键盘,非弹出 )
- NumberKeyboard (数字键盘)
- Picker (移动端选择器)
- PickerView (平铺选择器)
- Rate (评分/几颗星)
- IndexList (索引列表)
- FileInputTrigger (触发文件上传)
- Signature (手写签名)
- DatePicker (移动端日期选择)
- Calendar (移动端日历)

### 5. 数据展示

- Cell（列表项，多用于移动端,可以和 input/textarea 组合使用）
- Badge (徽标)
- WaterMark (图片/文字水印 )
- Text (文本显示,单行/多行截断显示省略)
- ImageViewer (图片查看器)
- ProgressCircle (环形进度条)
- ProgressBar (进度条)
- QRCode (二维码)
- Collapse (折叠面板)
- Slide (轮播)
- NoticeBar (通告栏)
- NoticeList (多条信息垂直滚动通知栏)

### 6. 动画/过渡

- TransitionElement (给子元素添加出场过渡效果,出场包含 1.元素初次加载并可见 2.元素从不可见到可见的状态变化)
- AnimationElement(元素应用 animation 动画,和 TransitionElement 一样，只有在元素出现在视口才会执行动画,属性参照 css animation,也可以和 animate.css 配合使用,参考 https://animate.style/#usage using `@keyframes`)

### 7. 其他组件

- ThemeProvider (全局主题色配置)
- LazyLoadElement（懒加载组件,在视口才渲染 children,不在则显示占位元素）
- LazyLoadImage (懒加载图片，当做 img 标签使用, 在视口才加载图片)
- WaitLoading (延时显示 Loading/Spin 防止闪烁)
- ErrorBoudary （错误边界）
- Waypoint （可见/不可见指示）
- AutoCenter (自动居中)

### 8. 工具函数

- debounce (防抖)
- throttle (节流)
- loadResource(动态加载 js/css 文件)
- observe (使用 IntersectionObserver 监视 dom 元素在文档视口的可见性)
- unobserve (取消 observe 监控)

### 9. 常量

- isBrowser(是否是浏览器)
- isMobile (是否是移动端)

### 10. Hooks

- useUpdateEffect (执行异步更新 effect)
- useUpdateLayoutEffect (执行同步更新 effect)
- usePrevious (使用前一个值)
- useDebounce （返回 memorized 防抖函数）
- useThrottle （返回 memorized 节流函数）
- useInViewport (监听元素是否在视口内)
- useVisibleObserve (监视元素在文档视口的可见性，可见性变化时触发回调)
- useCallbackRef (保存最新的值在 ref 中)
- useCountdown (倒计时，常用于获取验证码)
- useMount (组件加载执行回调)
- useUnmount (组件卸载执行回调)
