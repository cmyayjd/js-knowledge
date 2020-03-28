/**
 * 什么是拷贝？
 */

{
  //arr、newArr是同一个引用，所以当newArr改变，arr指向的值也会跟着改变
  let arr = [1, 2, 3];
  let newArr = arr;
  newArr[0] = 100;

  console.log(arr); //[100, 2, 3]
}

{
  //newArr是arr浅拷贝的结果，它们不是同一引用，所以newArr改变时，arr不会变
  let arr = [1, 2, 3];
  let newArr = arr.slice();
  newArr[0] = 100;

  console.log(arr);//[1, 2, 3]
}

{
  //浅拷贝只能拷贝一层对象，如果有对象的嵌套，那么浅拷贝将无能为力
  let arr = [1, 2, {val: 4}];
  let newArr = arr.slice();
  newArr[2].val = 1000;

  console.log(arr);//[1, 2, {val: 1000}]
}

/**
 * 手动实现浅拷贝
 * 生成一个新的空的引用对象，然后将target的属性复制一份给空对象
 */
const shallowClone = (target) => {
  if(typeof target === 'object' && target !== null){
    const cloneTarget = Array.isArray(target) ? [] : {}
    for(let prop in target){
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = target[prop];
      }
    }
    return cloneTarget
  }else{
    return target
  }
}

/**
 * Object.assgin() 拷贝的是对象的属性的引用，而不是对象本身
 */
let obj = { name: 'sy', age: 18 };
const obj2 = Object.assign({}, obj, {name: 'sss'});
console.log(obj2);//{ name: 'sss', age: 18 }

/**
 * concat浅拷贝数组
 */
let arr = [1, 2, 3];
let newArr = arr.concat();
newArr[1] = 100;
console.log(arr);//[ 1, 2, 3 ]

/**
 * slice浅拷贝
 */

/**
 * ...展开运算符
 */
let arr = [1, 2, 3];
let newArr = [...arr];//跟arr.slice()是一样的效果
