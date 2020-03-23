/**
 * forEach中的return不会返回
 */
let nums = [1, 2, 3]
nums.forEach((item, index) => {
  return  //无效
})

/**
 * 如何中断循环
 *  1、使用try监视循环，在需要中断的地方抛出异常
 *  2、用every和some替代forEach, every在碰到return false时终止循环，some在碰到return true的时候终止循环
 */