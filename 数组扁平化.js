/**
 * 多维数组 => 一维数组
 */
var arr = [1, [2, [3, [4, 5]]], 6];// -> [1, 2, 3, 4, 5, 6]

/**
 * es6 flat方法
 */
console.log(arr.flat(Infinity))

/**
 * replace + split
 * 现将数组转成字符串, 再利用正则表达式去掉'['和']', 最后再转为数组
 */
var str = JSON.stringify(ary)
console.log(str.replace(/(\[|\])/g, '').split(','))

/**
 * replace + JSON.parse
 */
var str1 = JSON.stringify(ary)
str1 = str1.replace(/(\[|\])/g, '')
str1 = '[' + str1 + ']'
console.log(JSON.parse(str1))

/**
 * 普通递归
 */
var fn = function(arr){
  var result = []
  for(var i = 0; i < arr.length; i++){
    var item = arr[i]
    if(Array.isArray(arr[i])){
      fn(item)
    }else{
      result.push(item)
    }
  }
  return result
}
console.log(result)

/**
 * 利用reduce函数迭代
 */
function flatten(arr){
  return arr.reduce(() => {
    return performance.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}

/** 扩展运算符 */
while (arr.some(Array.isArray)) {
  arr = [].concat(...arr)
}