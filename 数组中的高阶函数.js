/**
 * 如果一个函数可以接收另一个函数作为参数或者返回一个函数，这种函数就称为高阶函数
 */

 /**
  * arr.map(callback[,回调函数的this])
  * callback默认传入三个值：当前元素、当前索引、整个数组
  * 创建一个新数组，结果是原数组中的每个元素都调用callback后的结果
  * 原数组不受影响
  */
 {
   var nums = [1,2,3]
   var obj = {val: 5}
   var newNums = nums.map(function(item,index,arr){
    return item + index + arr[index] + this.val
    //对第一个元素，1 + 0 + 1 + 5 = 7
    //对第二个元素，2 + 1 + 2 + 5 = 10
    //对第三个元素，3 + 2 + 3 + 5 = 13
   },obj)
   console.log(newNums)
 }

 /**
  * arr.reduce(callback[,初始值])
  * 回调函数三个默认参数：累值、当前值、整个数组
  * 如果不传默认值会自动以第一个元素为初始值，然后从第二个元素开始一次累计
  */
 {
   var nums = [2,2,3]
   var newNums = nums.reduce(function(preSum, curVal, arr){
     return preSum * curVal
   })
   console.log(newNums)
 }

 /**
  * arr.filter(callback)
  * 回调函数一个默认参数：当前元素
  * 该函数返回值为一个布尔类型，决定元素是否保留
  * filter返回一个新的数组，包含所有原数组被保留的项
  */
 {
   var nums = [1,2,3]
   var newNums = nums.filter(function(item){
     return item % 2  //奇数被保留
   })
   console.log(newNums)
 }

 /**
  * arr.sort(callback)
  * 回调函数两个默认参数：代表比较的两个元素
  * 这个回调函数表示排序的某种规则，根据返回值决定ab的位置
  * return a.age - b.age 的含义
  *  如果a.age - b.age < 0 将a放在b前面   满足条件a.age < b.age
  *  如果a.age - b.age > 0 将a放在b后面   满足条件a.age > b.age
  *  如果a.age - b.age == 0 位置不变       满足条件a.age == b.age
  * 
  * 所以这个排序功能是按照age字段的升序排序
  */

  {
    nums = [{name: 'a', age: 22}, {name: 'b', age: 11}, {name: 'c', age: 33}]
    nums.sort(function(a, b){
      return a.age - b.age
    })
    console.log(nums)
  }