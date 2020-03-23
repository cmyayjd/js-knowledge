
/**
 * 在js中，构造函数充当了类的角色
 * 函数都有一个prototype对象——原型对象(这个是函数特有的)
 * 实例可以调用构造函数的原型上的方法，是通过实例的__proto__获取到的，因为实例的__proto__指向构造函数的原型
 * 原型链: 可以借助 instanceof 来理解
 *  1、对于任意一个对象obj，它都有一个__proto__属性，指向它构造函数的原型对象
 *  2、当某个实例对象通过__proto__找到它构造函数的原型，发现没有该方法，就通过原型的__proto__继续查找，直到找到Object
 */

 /**
  * function A(){}    var a = new A()
  * a instanceof A   判断对象是否是A的实例
  * a instanceof Object 过程
  * 1、判断a.__proto__ 是否等于 Object.prototype, 发现不等于
  * 2、沿着原型链查找a.__proto__.__proto__ 是否等于Object.prototype， 发现等于返回true
  * 说明：a.__proto__指向的是A的原型对象，原型对象也是对象，它上面也有个__proto__, 指向的是它的构造函数(Object)的原型对象
  */

   /**
    * 模拟new运算符
    * new 做了三件事：
    *   1、创建一个新的空对象，继承自Foo.prototype
    *   2、构造函数Foo被执行，执行时，相应参数被传入，同时上下文this指向这个新实例
    *   3、如果构造函数返回一个”对象“，那么这个对象会取代整个new出来的结果；如果没有返回对象，那么new出来的结果为步骤1创建的对象
    * @param {Function} F 构造函数 
    * @param  {...any} args 
    */
   var mynew = function(F, ...args){
    if(typeof F !== 'function'){
      throw 'F 应是一个函数'
    }
    var obj = Object.create(F.prototype)  //生成空对象obj, obj.__proto__ === F.prototype, 这是Object.create的作用
    var res = F.apply(obj, args)

    var isObject = typeof res === 'object' && res !== null
    var isFunction = typeof res === 'function'
    return (isObject || isFunction) ? res : obj
   }

 