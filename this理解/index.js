/**
 * 显示绑定：call/apply/bind
 * 隐式绑定：
 *  1、全局上下文
 *  2、直接调用函数
 *  3、对象.方法的调用
 *  4、DOM事件绑定
 *  5、new构造函数绑定
 *  6、箭头函数
 */

/**
 * 全局上下文默认this指向window, 严格模式下指向undefined
 */

/**
 * 谁调用函数，this就指向谁
 */
let obj = {
  a: function() {
    console.log(this);
  }
}
obj.a(); //obj调用func函数，所以this指向obj 这就是第三种情况 对象.方法的调用
let func = obj.a;
func(); //Window调用func函数，所以this指向Window

/**
 * DOM事件绑定，this指向绑定事件的元素
 */

/**
 * new 构造函数：指向实例对象
 */

/**
 * 指向当前最近的非箭头函数的this，找不到就是window(严格模式是undefined)
 */
var obj = {
  a: function() {
    var b = () => {
      console.log(this);
    }
    b();
  }
}
obj.a(); // 找到最近的非箭头函数a，a现在绑定着obj, 因此箭头函数中的this是obj
