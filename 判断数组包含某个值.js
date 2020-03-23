/**
 * array.indexOf
 * 该方法判断数组是否存在某个值，如果存在，返回数组下标，否则返回-1
 * 
 * array.includes(searcElement[,fromIndex])
 * 该方法判断数组是否存在某个值，如果存在，返回true，否则返回false
 * 
 * arr.find(callback[,thisArg])
 * 返回数组中满足条件的第一个元素的值，如果没有，返回undefined
 * 
 * arr.findIndex(callback[,thisArg])
 * 返回数组中满足条件的第一个元素的下标，如果没有，返回-1
 */

 var arr = [1, 2, 3, 4]
 console.log(arr.indexOf(3))
 console.log(arr.includes(3))

 var result = arr.find(item => {
   return item > 3
 })
 console.log(result)

var result1 = arr.findIndex(item => {
  return item > 3
})
console.log(result1)