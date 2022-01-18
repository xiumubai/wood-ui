/** 是否是浏览器 */
export var isBrowser = !!(typeof window !== 'undefined' && window);

/** 是否是移动端 */
export var isMobile = isBrowser && /(iPhone|iPad|iPod|iOS|android)/i.test(navigator.userAgent);
