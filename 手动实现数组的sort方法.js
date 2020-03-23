
var arr = [10, 2, 1, 7, 6, 3, 6, 4, 2, 23, 1, 45, 22, 45, 11, 3, 9, 8]

Array.prototype.customSort = function(compareFn){
  var array = Object(this)
  var length = array.length >>> 0
  return innerArraySort(array, length, compareFn)
}

function innerArraySort(array, length, compareFn){
  //插入排序
  function insertSort(arr, l, r){
    for(var i = l + 1; i < r - l + 1; i++){
      //寻找arr[i]在[l, i-1]中合适的位置
      var temp = arr[i]
      for(var j = i-1; j >= l; j--){
        if(temp < arr[j]){
          arr[j+1] = arr[j]
        }else{
          break
        }
      }
      arr[j+1] = temp
    }
  }

  //元素个数大于1000时寻找哨兵元素
  function getThirdIndex(a, from, to){
    let tmpArr = [];
    // 递增量，200~215 之间，因为任何正数和15做与操作，不会超过15，当然是大于0的
    let increment = 200 + ((to - from) & 15);
    let j = 0;
    from += 1;
    to -= 1;
    for (let i = from; i < to; i += increment) {
      tmpArr[j] = [i, a[i]];
      j++;
    }
    // 把临时数组排序，取中间的值，确保哨兵的值接近平均位置
    tmpArr.sort(function (a, b) {
      return comparefn(a[1], b[1]);
    });
    let thirdIndex = tmpArr[tmpArr.length >> 1][0];
    return thirdIndex;
  }

  //三路快排
  function quickSort(arr, l, r){

    //获取哨兵位置
    var thirdIndex = 0 
    while (true) {
      if(r - l <= 10){
        insertSort(arr, l, r)
        return
      }
      if(r - l > 1000){
        thirdIndex = getThirdIndex(arr, l, r)
      }else{
        thirdIndex = l + ((r - l) >> 2)
      }
    }
    
    //开始快排
    [arr[l], arr[thirdIndex]] = [arr[thirdIndex], arr[l]]
    var v = arr[l]

    var lt = l        //arr[l+1...lt] < v
    var gt = r + 1    //arr[gt...r] > v
    var i = l + 1     //arr[lt+1...i) == v  i是当前考查的元素

    while (i < gt) {
      if(arr[i] < v){
        [arr[i], arr[lt+1]] = [arr[lt+1], arr[i]]
        lt++
        i++
      }else if(arr[i] > v){
        [arr[i], arr[gt-1]] = [arr[gt-1], arr[i]]
        gt--
      }else{
        i++
      }
    }
    [arr[l], arr[lt]] = [ arr[lt], arr[l]]

    quickSort(arr, l+1, lt)
    quickSort(arr, gt, r)
  }

  quickSort(array, 0, 17)

  return arr
}

console.log(arr.customSort())