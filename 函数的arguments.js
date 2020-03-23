/**
 * arguments是类数组，不是数组，所以不能调用数组的方法
 * 属性从0开始，依次为0, 1, 2...
 * 有callee和length属性
 * 
 * 其他类数组：
 *  1、getElementByTagName() getElementByClassName() 获得的HTMLCollection
 *  1、querySelector获得的nodeList
 */

 /**
  * 转为数组
  *  1、Array.prototype.slice.call()
  *  2、Array.from() 这个方法同样可以转换Set和Map
  *  3、es6展开运算符
  *  4、concat+apply
  */
 function sum1(a, b){
   let arr = Array.prototype.slice.call(arguments)
   console.log(arr.reduce((sum, cur) => sum + cur))
 }
 sum1(1, 2)

function sum2(a, b){
  let arr = Array.from(arguments)
  console.log(arr.reduce((sum, cur) => sum + cur))
}
sum2(1, 2)

function sum3(a, b){
  let arr = [...arguments]
  console.log(arr.reduce((sum, cur) => sum + cur))
}
sum3(1, 2)

function sum4(a, b){
  let arr = Array.prototype.concat.apply([], arguments)  //apply会把第二个参数展开
  console.log(arr.reduce((sum, cur) => sum + cur))
}
sum4(1, 2)
