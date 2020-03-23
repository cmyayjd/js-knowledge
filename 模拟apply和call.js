/**
 * Function.prototype.apply
 * func.apply(thisArg,[argsArray])
 * thisArg: 在func函数运行时使用的this值
 *          如果这个函数处于非严格模式，则指定为null或undefined时会自动替换为指向全局对象
 * argsArray: 数组或类数组对象，数组元素将作为单独的参数传给func函数
 * 返回函数运行结果
 */

 Function.prototype.myApply = function(context, args){
   var context = context || window 
   var fn = Symbol('fn')
   context.fn = this //调用函数
   var result = eval('context.fn(...args)')

   delete context.fn
   return result
 }

 Function.prototype.myCall = function(context, ...args){
  var context = context || window 
  var fn = Symbol('fn')
  context.fn = this
  var result = eval('context.fn(...args)')

  delete context.fn
  return result
  
 }