//节流和防抖
//使用场景: 函数被频繁调用
//节流: 目的是被频繁调用的函数，该函数在一定时间间隔内只执行一次
//防抖: 目的是在一定时间间隔内被频繁调用的函数，该函数只执行一次

/**
 * 节流处理-简单版
 * @param {Function} fn 需要执行的函数
 * @param {Number} wait 执行时间间隔
 * @return {Function} 
 */
function throttleSimple(fn, wait){
  let previous = 0  //上一次执行函数的时间
  return function(...args){
    let now = +new Date()
    if(now - previous > wait){
      previous = now
      fn.apply(this, args)
    }
  }
}

/**
 * 防抖处理-简单版
 * @param {Function} fn 需要执行的函数
 * @param {Number} wait 执行时间间隔
 * @return {Function} 
 */
function debounce(fn, wait){
  var timer = null
  return function(...args){
    if(timer) clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}
