/**
 * 1、类型有哪些？
 * 原始类型：number string boolean symbol bigint undefined null
 * 引用类型：普通对象-Object 数组-Array 正则-RegExp 日期-Date 数学-Math 函数-Function 
 */

/**
 * 2、类型引用
 * 函数传参的时候传递的是对象在堆中的内存地址，test函数中的person是p1对象的内存地址
 * 通过调用person.age = 26确实改变了p1的值，随后person变成了另一块内存空间的地址
 * 最后将这另外一份内存地址返回赋值给p2
 */
function test(person) {
  person.age = 26
  person = {
    name: 'hzj',
    age: 18
  }
  return person
}
const p1 = {
  name: 'fyq',
  age: 19
}
const p2 = test(p1)
console.log(p1) 
console.log(p2)

/**
 * 3、typeof类型检测
 * 对于原始类型：除了null都可以调用typeof显示正确的类型
 * 对于引用类型：除了函数外都显示object, 函数显示function
 */
console.log(typeof(123))             //number
console.log(typeof('123'))           //string
console.log(typeof(true))            //boolean
console.log(typeof(Symbol(1)))       //symbol
console.log(typeof(undefined))       //undefined
console.log(typeof(null))            //object 这是一个美丽的错误 null不是对象

console.log(typeof({}))              //object
console.log(typeof([]))              //object
console.log(typeof(/Runoob/))        //object
console.log(typeof(function(){}))    //function

//对于引用类型：使用 A instanceof B  必须之一：该方法只能判断对象类型
console.log([] instanceof Array)              //true
console.log([] instanceof Object)             //true
console.log({} instanceof Object)             //true
console.log(function(){} instanceof Object)   //true
console.log(function(){} instanceof Function) //true
console.log(new Number(1) instanceof Number)  //true

//Object.prototype.toString.call()
//该方法可以精准判断数据类型
console.log(Object.prototype.toString.call(123))           //[object Number]
console.log(Object.prototype.toString.call('123'))         //[object String]
console.log(Object.prototype.toString.call(true))          //[object Boolean]
console.log(Object.prototype.toString.call(Symbol(1)))     //[object Symbol]
console.log(Object.prototype.toString.call(undefined))     //[object Undefined]
console.log(Object.prototype.toString.call(null))          //[object Null]
console.log(Object.prototype.toString.call([]))            //[object Array]
console.log(Object.prototype.toString.call({}))            //[object Object]
console.log(Object.prototype.toString.call(function(){}))  //[object Function]

//Array.isArray() 判断对象是否为数组
console.log(Array.isArray([]))  //true

/**
 * 4、类型转换有哪几种
 * js中的类型转换只有三种：转成数字、转成布尔值、转成字符串
 */

 /**
  * == 和 === 的区别
  * 
  */