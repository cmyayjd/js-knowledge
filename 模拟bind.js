/**
 * Function.prototype.bind()
 * 绑定一个函数的this
 * bind返回一个原函数的拷贝，并拥有指定的this值和初始参数
 * 这个新函数的this被指定为bind()的第一个参数，而其余参数将作为新函数的参数，供调用时使用
 * 
 * 对于普通函数，绑定this指向
 * 对于构造函数，原函数的原型对象上的属性不丢失
 */

 {
   const module = {
     x: 42,
     getX: function(){
       return this.x
     }
   }

   const unboundGetX = module.getX
   console.log(unboundGetX()) //this 指向window

   const boundGetX = unboundGetX.bind(module)
   console.log(boundGetX())  //this 指向module
 }

 /**
  * 模拟bind
  */
 Function.prototype.myBind = function(context, ...args){
   if(typeof this !== 'function'){
     throw new Error("应该由函数调用该方法")
   }

   var self = this //保存this, 代表调用 bind 的函数
   var fNOP = function() {}

   var fbound = function(){
     self.apply(this instanceof self
                  ? this
                  : context, args.concat(Array.prototype.slice.call(arguments)))
   }

   fNOP.prototype = this.prototype
   fbound.prototype = new fNOP()

   return fbound

 }