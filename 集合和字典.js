
//Set 集合 es6新增的数据结构，类似于数组，但成员是唯一且无序的，没有重复的值
var set = new Set([1,2,3,2])
console.log(set) //{1,2,3}
set.add(1) //增加元素
set.delete(1) //存在即删除元素
set.has(1) //判断是否存在元素
set.clear() //清除集合
console.log(set.size)   //元素数量

//转为数组-两种方法
var items = new Set([1,2,4,3])
console.log(Array.from(items))
console.log([...items])

//遍历
var set = new Set([2,3,4])
for(let item of set.keys()){ //键
  console.log(item)
}
for(let item of set.values()){ //值
  console.log(item)
}
for(let item of set.entries()){ //键值对
  console.log(item)
}
set.forEach((value, key) => {
  console.log(key + value)
})

//WeakSet 
//只能存储对象引用，不能存放值
//存储的对象值都是被弱引用的，即垃圾回收机制不会考虑
//无法遍历，也就无法拿到包含的元素
// add(value)、has(value)、delete(value)有效

//Map 字典
//共同点：集合、字典都可以存储不重复的值
//不同点：集合是以[value, value]的形式存储、字典是以[key, value]形式存储
var map = new Map()
var k1 = ['a']
var k2 = ['a']
map.set(k1, 111).set(k2, 222)
console.log(map) // { ['a']: 111, ['a']: 222 }
console.log(map.get(k2))