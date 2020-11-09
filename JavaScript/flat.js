//数组拍平
/*some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。

some() 方法会依次执行数组的每个元素：

如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
如果没有满足条件的元素，则返回false。
注意： some() 不会对空数组进行检测。

注意： some() 不会改变原始数组。*/


 

//数组拍平
 function flat (ary) {
     //判断是否深层次数组
     const deep = ary.some(item => item instanceof Array)
     if (!deep) {
         return ary
     } 
     const res = Array.prototype.concat.apply([],ary)
     return flat(res)

 }

 let ary = [1,2,[3,[4,[5]]],7,8,['a',['b',[8]]]]

console.log(flat(ary))