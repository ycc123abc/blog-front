export function debounce(func:any, wait: number) {
  let timeout: any;
  return function (this:any) {
    const context: any = this; // 保存函数执行的上下文
    const args = arguments; // 保存传入的参数

    clearTimeout(timeout); // 如果存在上一次的定时器，先清除

    timeout = setTimeout(function () {
      func.apply(context, args); // 在延迟时间结束后执行原函数
    }, wait); // 等待指定的时间后再执行
  };
}
